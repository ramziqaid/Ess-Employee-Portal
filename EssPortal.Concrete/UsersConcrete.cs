using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class UsersConcrete : IUsers
    {
        //  private readonly UserManager<IdentityUser> _userManager;
        private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;
        public UsersConcrete(DatabaseContext context, IConfiguration configuration)  
        {
            _context = context;
            _configuration = configuration;
        }

        public bool CheckUsersExits(string username)
        {
            var result = (from user in _context.Users
                          where user.UserName == username
                          select user).Count();

            return result > 0 ? true : false;
        }
        public bool CheckEmployeeExits(long EmployeeId)
        {
            var result = (from user in _context.Users
                          where user.EmployeeId == EmployeeId
                          select user).Count();

            return result > 0 ? true : false;
        }
        public Users AuthenticateUsers(string username, string password)
        {
            var user = _context.Users.FirstOrDefault(x => x.UserName == username);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // auth successful
            return user;


        }

        public LoginResponse GetUserDetailsbyCredentials(string username, string password)
        {
            try
            {
                var result2 = _context.Users.FirstOrDefault(x => x.UserName == username);

                if (result2 == null)
                    return null;

                if (!VerifyPasswordHash(password, result2.PasswordHash, result2.PasswordSalt))
                    return null;


                var result = (from user in _context.Users
                              join userinrole in _context.UsersInRoles on user.UserId equals userinrole.UserId
                              join role in _context.Role on userinrole.RoleId equals role.RoleId

                              where user.UserName == username

                              select new LoginResponse
                              {
                                  UserId = user.UserId,
                                  RoleId = userinrole.RoleId,
                                  RoleName = role.RoleName,
                                  Status = user.Status,
                                  EmailId = user.EmailId,
                                  EmployeeId = user.EmployeeId,
                                  UserName = user.UserName

                              }).FirstOrDefault();

                if (result == null) throw new Exception("Username Not have Permission Login ");


                var employee = (from emp in _context.EmployeeInfoView
                                where emp.EmployeeID.Equals(result.EmployeeId.ToString())
                                select emp).SingleOrDefault();
                if (employee != null)
                {
                    result.EmployeeName = employee.ArabicName;
                }

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }


        public  List<Users> GetAllUsers()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@UserID", -1);

                IEnumerable<Users> users =   con.Query<Users>("[ESS].LoadUserInfo", paramater, null, true, commandType: CommandType.StoredProcedure);
                return users.ToList();

            }

            //var result = (from user in _context.Users
            //              join emp in _context.EmployeeInfoView on user.EmployeeId.ToString() equals emp.EmployeeID
            //              into employee
            //              from ed in employee.DefaultIfEmpty() 

            //              where (user.UserName.ToUpper() != "SUPERADMIN")
            //              //where user.Status == true
            //              select new Users
            //              {
            //                  UserId = user.UserId,
            //                  EmployeeId = user.EmployeeId,

            //                  EmployeeNumber = ed.Personnelnumber,
            //                  EmployeeNameAr = ed.ArabicName,
            //                  EmployeeNameEn = ed.EnglishName,

            //                  UserName = user.UserName,
            //                  FullName = user.FullName,
            //                  EmailId = user.EmailId,
            //                  Contactno = user.Contactno,
            //                  Createdby = user.Createdby,
            //                  CreatedDate = user.CreatedDate,
            //                  Status = user.Status, 

            //              }).ToList();

            //return result;
        }

        public Users GetUsersbyId(int userId)
        {
            var result = (from user in _context.Users
                          where user.UserId == userId
                          select new Users
                          {
                              UserId = user.UserId,
                              EmployeeId = user.EmployeeId,
                              UserName = user.UserName,
                              FullName = user.FullName,
                              EmailId = user.EmailId,
                              Contactno = user.Contactno,
                              Createdby = user.Createdby,
                              CreatedDate = user.CreatedDate,
                              Status = user.Status,
                              //PasswordHash = user.PasswordHash,
                              //PasswordSalt = user.PasswordSalt,

                          }).FirstOrDefault();

            return result;
        }

        public bool InsertUsers(Users user, string Password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(Password, out passwordHash, out passwordSalt);

            user.EmailId = user.EmailId.Trim();
            user.Contactno = user.Contactno.Trim();
            user.FullName = user.FullName.Trim();
            user.UserName = user.UserName.Trim();
          
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.Users.Add(user);
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool UpdateUsers(Users user, string Password)
        {
            if (user.UserName.ToUpper() == "SUPERADMIN")
                return false;

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(Password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            user.EmailId = user.EmailId.Trim();
            user.Contactno = user.Contactno.Trim();
            user.FullName = user.FullName.Trim();
            user.UserName = user.UserName.Trim();

            _context.Entry(user).Property(x => x.EmployeeId).IsModified = false;
            _context.Entry(user).Property(x => x.EmailId).IsModified = true;
            _context.Entry(user).Property(x => x.Contactno).IsModified = true;
            _context.Entry(user).Property(x => x.Status).IsModified = true;
            _context.Entry(user).Property(x => x.FullName).IsModified = true;
            _context.Entry(user).Property(x => x.PasswordHash).IsModified = true;
            _context.Entry(user).Property(x => x.PasswordSalt).IsModified = true;

            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool UpdateUsersStatus(Users user)
        {
            if (user.UserName.ToUpper() == "SUPERADMIN")
                return false;

            _context.Entry(user).Property(x => x.Status).IsModified = true;
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool ChangePassword(UsersChangePasswordViewModel usersChangePasswordViewModel)
        {
            var user = _context.Users.FirstOrDefault(p => p.UserId == usersChangePasswordViewModel.UserId);
            if (user == null)
                return false;
            if (user.UserName.ToUpper() == "SUPERADMIN")
                return false;

            byte[] passwordHash, passwordSalt;
             
            if (!VerifyPasswordHash(usersChangePasswordViewModel.oldPassword, user.PasswordHash, user.PasswordSalt))
            {
                throw new Exception("The Old Password Not Correct");
            }

            CreatePasswordHash(usersChangePasswordViewModel.newPassword, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.Entry(user).Property(x => x.PasswordHash).IsModified = true;
            _context.Entry(user).Property(x => x.PasswordSalt).IsModified = true;

            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool ResetPassword(int userid)
        {
            var user = _context.Users.FirstOrDefault(p => p.UserId == userid);
            if (user == null)
                return false;
            if (user.UserName.ToUpper() == "SUPERADMIN")
                return false;

            byte[] passwordHash, passwordSalt; 

            CreatePasswordHash("Aa123123", out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.Entry(user).Property(x => x.PasswordHash).IsModified = true;
            _context.Entry(user).Property(x => x.PasswordSalt).IsModified = true;

            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        public bool DeleteUsers(int userId)
        {
            var removeuser = (from user in _context.Users
                              where user.UserId == userId
                              select user).FirstOrDefault();
            if (removeuser != null)
            {
                if (removeuser.UserName.ToUpper() == "SUPERADMIN")
                    return false;

                _context.Users.Remove(removeuser);
                var result = _context.SaveChanges();

                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

       
    }
}
