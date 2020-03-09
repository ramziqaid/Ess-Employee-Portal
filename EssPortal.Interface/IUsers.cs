using System.Collections.Generic;
using System.Threading.Tasks;
using EssPortal.Models;
using EssPortal.ViewModels;

namespace EssPortal.Interface
{
    public interface IUsers
    {
        bool InsertUsers(Users user, string Password);
        bool CheckUsersExits(string username);
        bool CheckEmployeeExits(long EmployeeId);
        Users GetUsersbyId(int userid);
        bool DeleteUsers(int userid);
        bool UpdateUsers(Users users, string Password);
        bool UpdateUsersStatus(Users user);
        bool ChangePassword(UsersChangePasswordViewModel usersChangePasswordViewModel);
         bool ResetPassword(int userid);

        List<Users> GetAllUsers();
        Users AuthenticateUsers(string username, string password);
        LoginResponse GetUserDetailsbyCredentials(string username, string password);
    }
}