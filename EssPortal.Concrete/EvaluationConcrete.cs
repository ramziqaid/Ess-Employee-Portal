using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Models.searchVM;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using static EssPortal.ViewModels.EvaluationViewModel;

namespace EssPortal.Concrete
{
    public class EvaluationConcrete : GenericRepository<Evaluation>, IEvaluationRepository
    {
        private readonly IConfiguration _configuration;
        NotificationConcrete notificationConcrete ;
        EmployeesConcrete employeesConcrete;
        EmailsNotificationConcrete emails;
        private readonly AttachmentConcrete attachmentConcrete;
        public EvaluationConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
            notificationConcrete = new NotificationConcrete(_context, _configuration);
            employeesConcrete = new EmployeesConcrete(_context, _configuration);
            emails = new EmailsNotificationConcrete(_context, _configuration);
            attachmentConcrete = new AttachmentConcrete(_context, _configuration);
        }

        public async Task<List<dynamic>> getEvalCharterCommunityInfo(long pEmployeeID, long pEvalPeriodID, long pEvalCommunityID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@EvalPeriodID", pEvalPeriodID);
                paramater.Add("@EvalCommunityID", pEvalCommunityID);

                return con.Query("[ess].LoadEvalCharterCommunityInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
        }

        public async Task<List<dynamic>> getEvalCommunityInfo(long pEmployeeID, long pEvalCommunityID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@EvalCommunityID", pEvalCommunityID);

                return con.Query("[ess].LoadEvalCommunityInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

        public async Task<EvaluationViewModel> getEvalResultInfo(int pEvaluationID, int pUserID)
        {
            EvaluationViewModel obj = new EvaluationViewModel();
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EvaluationID", pEvaluationID);
                paramater.Add("@UserID", pUserID);

                var reader = con.QueryMultiple("[ess].LoadEvalResultInfo", paramater, commandType: CommandType.StoredProcedure);
                obj.evaluationVM = reader.Read<EvaluationVM>().FirstOrDefault();
                obj.evalCharterCommunityItemsVM = reader.Read<EvalCharterCommunityViewModel>().ToList();

                return obj;

            }
        }

        public async Task<List<dynamic>> searchEvaluationInfo(long pEvalPeriodID, long pEvalCommunityID, long pEmployeeID, long pManagerID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EvalPeriodID", pEvalPeriodID);
                paramater.Add("@EvalCommunityID", pEvalCommunityID);
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@ManagerID", pManagerID);

                return con.Query("[ess].SearchEvaluationInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
        }



        public async Task<Evaluation> saveEvaluation(EvaluationViewModel evaluationVM, int UserID)
        {

            checkBissines(evaluationVM, UserID, "Insert");

            Evaluation evaluation = new Evaluation()
            {
                EvaluationID = 0,
                EvalCharterID = evaluationVM.evaluationVM.EvalCharterID,
                EmployeeID = evaluationVM.evaluationVM.EmployeeID,
                UserID = evaluationVM.evaluationVM.UserID,
                Notes = evaluationVM.evaluationVM.Notes
            };
            await _context.Evaluations.AddAsync(evaluation);

            evaluationVM.evaluationCharterItems = new List<EvaluationCharterItem>();
            foreach (EvalCharterCommunityViewModel obj in evaluationVM.evalCharterCommunityItemsVM)
            {
                EvaluationCharterItem item = new EvaluationCharterItem
                {
                    EvaluationCharterItemsID = 0,
                    EvaluationID = evaluation.EvaluationID,
                    EvalCharterDetailsItemsID = obj.EvalCharterDetailsItemsID,
                    DegreeEmployee = Convert.ToInt16(obj.DegreeEmployee)
                };
                evaluationVM.evaluationCharterItems.Add(item);
            }

            await _context.AddRangeAsync(evaluationVM.evaluationCharterItems);
            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (evaluationVM.attachments != null)
            {
                foreach (Attachment dtl in evaluationVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = evaluation.EvaluationID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }

            Employee employeeManager = _context.EmployeeInfoView.Where(p => p.ManagerID == evaluationVM.evaluationVM.EmployeeID).FirstOrDefault();
            Users usersManager = _context.Users.Where(p => p.EmployeeId == employeeManager.EmployeeID).FirstOrDefault();
            if (usersManager != null)
            { 
                await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", usersManager.UserId,  0, UserID);
            }

            return evaluation;
        }

        public async Task<Evaluation> updateEvaluation(EvaluationViewModel evaluationVM, int UserID)
        {

            checkBissines(evaluationVM, UserID, "Update");

            evaluationVM.evaluationCharterItems = new List<EvaluationCharterItem>();
            foreach (EvalCharterCommunityViewModel obj in evaluationVM.evalCharterCommunityItemsVM)
            {
                EvaluationCharterItem item = new EvaluationCharterItem
                {
                    EvaluationCharterItemsID = Convert.ToInt16(obj.EvaluationCharterItemsID),
                    EvaluationID = Convert.ToInt16(evaluationVM.evaluationVM.EvaluationID),
                    EvalCharterDetailsItemsID = obj.EvalCharterDetailsItemsID,
                    DegreeEmployee = Convert.ToInt16(obj.DegreeEmployee)
                };
                evaluationVM.evaluationCharterItems.Add(item);
            }

            _context.UpdateRange(evaluationVM.evaluationCharterItems);
            await _context.SaveChangesAsync();

            //AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            //if (evaluationVM.attachments != null)
            //{
            //    foreach (Attachment dtl in evaluationVM.attachments)
            //    {
            //        Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
            //        obj.ReferenceID = evaluation.EvaluationID;
            //        await attachmentConcrete.UpdateAttachment(obj);
            //    }
            //}
            Evaluation evaluation = _context.Evaluations.Where(p => p.EvaluationID == evaluationVM.evaluationVM.EvaluationID).FirstOrDefault();
            return evaluation;
        }

        public async  void ApproveRejectEvaluation(EvalVM evaluationVM)
        {
           
            Evaluation evaluation = _context.Evaluations.Where(p => p.EvaluationID == evaluationVM.evaluationID).FirstOrDefault();
            Users users = _context.Users.Where(p => p.EmployeeId == evaluation.EmployeeID).FirstOrDefault();

            Employee employeeManager = _context.EmployeeInfoView.Where(p => p.ManagerID == evaluation.EmployeeID).FirstOrDefault();
            Users usersManager = null;

            if (employeeManager != null)
            {
                usersManager = _context.Users.Where(p => p.EmployeeId == employeeManager.EmployeeID).FirstOrDefault();
            }

            if (evaluation != null)
            {
                Employee employee = _context.EmployeeInfoView.Where(p => p.EmployeeID == evaluation.EmployeeID).FirstOrDefault();

                if (evaluationVM.employeeApproval == 0 || evaluationVM.employeeApproval == 1)
                {
                    if (employee != null && employee.EmployeeID == evaluationVM.employeeID)
                    {
                        if (evaluation.HRApproval == null && (evaluation.ManagerApproval == null || evaluation.ManagerApproval == 2))
                        {
                            if(evaluationVM.employeeApproval == 1)
                            {
                                if (usersManager != null)
                                {                                   
                                    await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", usersManager.UserId, 1, null);
                                }
                            }
                        }
                        else
                        {
                            throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                        }
                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }

                //manager
                else if (evaluationVM.managerApproval == 0)
                {
                    if (evaluation.HRApproval == null && evaluation.ManagerApproval == 1)
                    {

                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }
                else if (evaluationVM.managerApproval == 1)
                {
                    if ((evaluation.HRApproval == null || evaluation.HRApproval == 2) && evaluation.EmployeeApproval == 1)
                    {
                        List<EmployeeUserHRViewModel> employeeUserHRs = await employeesConcrete.GetEmployeeUserHR();
                        if (employeeUserHRs != null)
                        {
                            foreach (EmployeeUserHRViewModel item in employeeUserHRs)
                            {
                                await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", Convert.ToInt32(item.UserId), 1, null);
                            }
                        }
                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }

                }
                else if (evaluationVM.managerApproval == 2)
                {
                    if ((evaluation.HRApproval == null || evaluation.HRApproval == 2) && evaluation.EmployeeApproval == 1)
                    {
                        if (users != null)
                        {
                            await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", users.UserId, 2, null);
                        }
                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }

                //hr
                else if (evaluationVM.hRApproval == 0)
                {
                    if (evaluation.HRApproval == 1 && evaluation.ManagerApproval == 1)
                    {

                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }
                else if (evaluationVM.hRApproval == 1)
                {
                    if (evaluation.HRApproval == null && evaluation.ManagerApproval == 1)
                    {
                        if (users != null)
                        {
                            await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", users.UserId, 1, null);
                        }
                        if (usersManager != null)
                        {
                            await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", usersManager.UserId, 1, null);
                        }
                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }
                else if (evaluationVM.hRApproval == 2)
                {
                    if ((evaluation.HRApproval == null || evaluation.HRApproval==1) && evaluation.ManagerApproval == 1)
                    {
                        if (usersManager != null)
                        {
                            await notificationConcrete.SaveNotification(evaluation.EvaluationID, false, "NOT02", usersManager.UserId, 2, null);
                        }
                    }
                    else
                    {
                        throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION");
                    }
                }
            }

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EvaluationID", evaluationVM.evaluationID);
                paramater.Add("@EmployeeApproval", evaluationVM.employeeApproval);
                paramater.Add("@ManagerApproval", evaluationVM.managerApproval);
                paramater.Add("@ManagerApprovalID", evaluationVM.managerApprovalID);
                paramater.Add("@HRApproval", evaluationVM.hRApproval);
                paramater.Add("@HRApprovalID ", evaluationVM.hRApprovalID);
                paramater.Add("@Note ", evaluationVM.notes);

                var value = con.Query("[ess].ApprovalRejectEvaluationInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure);
            }

        }

        public async Task<bool> DeleteEvaluation(int pEvaluationID, int pUserID)
        {
            Evaluation evaluation = _context.Evaluations.Where(p => p.EvaluationID == pEvaluationID).FirstOrDefault();
            if (evaluation != null)
            {
                if (evaluation.UserID != pUserID)
                {
                    throw new Exception("MSG_EVALUATION_DONT_HAVE_PEMISSION_DELETE");
                }
                if (evaluation.EmployeeApproval != null)
                {
                    throw new Exception("MSG_NOT_CAN_DELETE_EVALUATION");
                }
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
                {
                    var paramater1 = new DynamicParameters();
                    paramater1.Add("@EvaluationID", pEvaluationID);
                    paramater1.Add("@UserID", pUserID);

                    var affectedRows = await con.ExecuteAsync("[ESS].DeleteEvaluationInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                    if (affectedRows > 0)
                        return true;
                }
            }
            return false;
        }

        void checkBissines(EvaluationViewModel evaluationVM, int UserID, string pAction)
        {
            #region "Bussines" 

            PortalSetting portalSetting = _context.PortalSettings.FirstOrDefault();
            Employee employee = _context.EmployeeInfoView.Where(p => p.EmployeeID == evaluationVM.evaluationVM.EmployeeID).FirstOrDefault();
            Evaluation evaluation = _context.Evaluations.Where(p => p.EvaluationID == evaluationVM.evaluationVM.EvaluationID).FirstOrDefault();
            Users users = _context.Users.Where(p => p.EmployeeId == evaluationVM.evaluationVM.EmployeeID).FirstOrDefault();

            switch (pAction)
            {
                case "Insert":
                    if (users != null && users.UserId != evaluationVM.evaluationVM.UserID)
                    {
                        throw new Exception("MSG_EVALUATION_CANNOT_SAVE");
                    }
                    break;
                case "Update":
                    if (UserID == evaluationVM.evaluationVM.UserID)
                    {
                        if (evaluation.EmployeeApproval == 1)
                        {
                            throw new Exception("MSG_EVALUATION_EMPLOYEE_IS_APPROVAL");
                        }
                    }
                    if (UserID != evaluationVM.evaluationVM.UserID)
                    {
                        if (evaluation.EmployeeApproval != 1)
                        {
                            throw new Exception("MSG_EVALUATION_EMPLOYEE_IS_NOT_APPROVAL");
                        }
                    }
                    if (evaluation.HRApproval == 1)
                    {
                        throw new Exception("MSG_EVALUATION_IN_FINAL");
                    }
                    Users manager = _context.Users.Where(p => p.UserId == UserID).FirstOrDefault();
                    if (UserID != evaluationVM.evaluationVM.UserID && employee.ManagerID != manager.UserId)
                    {
                        throw new Exception("MSG_NOT_HAVE_PERMISSION_EDIT_THIS_EVALUATION");
                    }
                    break;
                case "Delete":
                    break;

            }


            //if (portalSetting.NumberSalaryForLoan != null)
            //{
            //    string amount = getExtraFieldValue(requestVM.RequestExtraFields, 10);
            //    if (amount != null && Convert.ToDecimal(amount) > (portalSetting.NumberSalaryForLoan * Convert.ToDecimal(employee.BASICSALARY)))
            //    {
            //        throw new Exception("MSG_1_#" + (portalSetting.NumberSalaryForLoan * Convert.ToDecimal(employee.BASICSALARY)).ToString());
            //    }
            //}

            #endregion
        }

    }
}
