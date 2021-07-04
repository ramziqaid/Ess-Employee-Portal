using System;
using System.Collections.Generic;
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
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace EssPortal.Concrete
{
    public class RequestConcrete : GenericRepository<Request>, IRequestRepository
    {
        //  private readonly UserManager<IdentityUser> _userManager;
        // private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;
        NotificationConcrete notificationConcrete;
        EmailsNotificationConcrete emails;
        public RequestConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
            notificationConcrete = new NotificationConcrete(_context, _configuration);
            emails = new EmailsNotificationConcrete(_context, _configuration);
        }


        public async Task<List<dynamic>> getRequestsList(int? requestID, string pRequsetPrivateNumber, long? pEmployeeID, long? pManagerID, int? requestTypeID,
                                                          string orderStatusCode, Boolean showMyEmployee)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@RequestID", requestID);
                paramater.Add("@RequsetPrivateNumber", pRequsetPrivateNumber);
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@ManagerID", pManagerID);
                paramater.Add("@RequestTypeID", requestTypeID);
                paramater.Add("@StatusCode", orderStatusCode);
                paramater.Add("@ShowMyEmployee", showMyEmployee);

                return con.Query("[ess].GetOrder", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

        public async Task<List<dynamic>> GetRequestStage(int pRequestID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@RequestID", pRequestID);

                return con.Query("[ess].LoadOrderStage", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

        public async Task<List<NextStageVM>> GetNextStageInfo(int pRequestID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@RequestID", pRequestID);

                return con.Query<NextStageVM>("[ess].GetNextStageInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

        public async Task<Request> GetRequestsWithAllData(Expression<Func<Request, bool>> predicate)
        {
            return await _context.Requests
                 //.Include(c => c.RequestType)
                 //.Include(c => c.Employee)
                 //.Include(c => c.RequestStages)
                 //.Include(c => c.Amendments)//.ThenInclude(a => a.AmendmentReasons)
                 //                           //.Include(c => c.Housings)
                 .Where(predicate).FirstOrDefaultAsync();

            //using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            //{
            //    var paramater = new DynamicParameters();
            //    paramater.Add("@RequestID", pRequestID);
            //    IEnumerable<RequestViewModel> x = await con.QueryAsync<RequestViewModel>("ESS_LoadRequestInfo", paramater, null, 0, commandType: System.Data.CommandType.StoredProcedure);
            //    return x.FirstOrDefault();
            //}

        }

        //public async Task<RequestViewModel> GetRequestsWithAllData(int pRequestID, int UserID)
        //{

        //    RequestViewModel obj = new RequestViewModel();
        //    using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
        //    {
        //        var paramater1 = new DynamicParameters();
        //        paramater1.Add("@RequestID", pRequestID);
        //        paramater1.Add("@UserID", UserID);

        //        Request purchases = _context.Requests.Where(p => p.RequestID == pRequestID && p.UserID == UserID).FirstOrDefault();
        //        //IEnumerable<Request> purchases = await con.QueryAsync<Request>("[ESS].LoadRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
        //        if (purchases == null)
        //        {
        //            return obj;
        //        }
        //        IEnumerable<Amendment> amendment = _context.Amendments.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<Housing> housing = _context.Housings.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<RequestStage> requestStage = _context.RequestStages.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<RequestExtraField> extraFiled = _context.RequestExtraFields.Where(p => p.RequestID == pRequestID);


        //        obj.request = purchases;
        //        if (amendment != null) obj.amendments = amendment.ToList();
        //        if (housing != null) obj.Housings = housing.ToList();
        //        if (requestStage != null) obj.RequestStages = requestStage.ToList();
        //        if (requestStage != null) obj.RequestExtraFields = extraFiled.ToList();

        //        return obj;
        //    }

        //}

        public async Task<RequestViewModel> GetRequestInfo(int pRequestID, int UserID)
        {

            RequestViewModel obj = new RequestViewModel();
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", pRequestID);
                paramater1.Add("@UserID", UserID);

                var reader = con.QueryMultiple("[ess].LoadRequestInfo", paramater1, commandType: CommandType.StoredProcedure);
                obj.request = reader.Read<Request>().FirstOrDefault();
                obj.RequestExtraFields = reader.Read<RequestExtraField>().ToList();
                obj.RequestStages = reader.Read<RequestStage>().ToList();

                return obj;
                //  return con.Query("[ess].LoadRequestInfo", paramater1, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();

            }

        }

        public async Task<Request> saveRequest(RequestViewModel requestVM, int UserID)
        {
            checkBissines(requestVM, UserID, "insert");

            requestVM.request.RequestID = 0;
            await _context.Requests.AddAsync(requestVM.request);
            foreach (RequestStage stage in requestVM.RequestStages)
            {
                stage.RequestID = requestVM.request.RequestID;
                stage.ActionCode = "COR01";
                stage.OrderStageID = 0;
            }
            foreach (RequestExtraField obj in requestVM.RequestExtraFields)
            {
                obj.RequestID = requestVM.request.RequestID;
                obj.RequestExtraFieldID = 0;
            }
            await _context.AddRangeAsync(requestVM.RequestStages);
            if (requestVM.RequestExtraFields != null) await _context.AddRangeAsync(requestVM.RequestExtraFields);
            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (requestVM.attachments != null)
            {
                foreach (Attachment dtl in requestVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = requestVM.request.RequestID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }


            List<NextStageVM> nextStageVMs = await GetNextStageInfo(requestVM.request.RequestID, UserID);
            if (nextStageVMs != null)
            {
                
                foreach (NextStageVM item in nextStageVMs)
                {
                    if (item.UserId != null)
                    {
                        await notificationConcrete.SaveNotification(requestVM.request.RequestID, false, "NOT01",   Convert.ToInt32(item.UserId),0, UserID);
                        await emails.InsertEmailsNotifications("New Request  طلب جديد ", "", null, Convert.ToInt32(item.UserId), requestVM.request.RequestID, false);
                    }
                }

            }

            return requestVM.request;

        }


        public async Task<Request> updateRequest(RequestViewModel requestVM, int UserID)
        {

            checkBissines(requestVM, UserID, "update");

            _context.Requests.Update(requestVM.request);

            if (requestVM.RequestExtraFields != null) _context.UpdateRange(requestVM.RequestExtraFields);

            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (requestVM.attachments != null)
            {
                foreach (Attachment dtl in requestVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = requestVM.request.RequestID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }
            return requestVM.request;

            //await _context.AddRangeAsync(requestVM.RequestStages);
            //if (requestVM.amendments != null)   _context.Amendments.UpdateRange(requestVM.amendments);
            //if (requestVM.Housings != null)   _context.Housings.UpdateRange(requestVM.Housings);
            //await _context.SaveChangesAsync();

        }

        public async Task<bool> DeleteRequest(int pRequestID, int pUserID)
        {
            Request request = _context.Requests.Where(p => p.RequestID == pRequestID).FirstOrDefault();
            if (request.StatusCode != enumsType.RequestStatus.NewRequest)
            {
                throw new Exception("MSG_NOT_CAN_DELETE_REQUET_NOT_NEW_STAGE");
            }
            Users users = _context.Users.Where(p => p.UserId == pUserID).FirstOrDefault();

            if (users != null && request.EmployeeID != users.EmployeeId)
            {
                throw new Exception("NOT_HAVE_PERMISSION_DELETE_THIS_REQUEST");
            }

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", pRequestID);
                paramater1.Add("@UserID", pUserID);

                var affectedRows = await con.ExecuteAsync("[ESS].DeleteRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                if (affectedRows > 0)
                    return true;
                return false;
            }
            return false;
        }

        public async Task<bool> approvalOrder(RequestStage requestStage, int UserID)
        {
            //requestStage.OrderStageID = 0;
            Request request = _context.Requests.Where(p => p.RequestID == requestStage.RequestID).FirstOrDefault();

            #region "Bussines"

            switch (request.StatusCode)
            {
                case "CSR03":
                    throw new Exception("MSG_THIS_REQUEST_CANCELED");
                    break;
                case "CSR04":
                    throw new Exception("MSG_THIS_REQUEST_REJECTED");
                    break;
                case "CSR05":
                    throw new Exception("MSG_THIS_REQUEST_DONE");
                    break;
            }
            // throw new Exception("MSG_STAGE_NOT_FOUND");

            #endregion

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", requestStage.RequestID);
                paramater1.Add("@StageTypeID", requestStage.StageTypeID);
                paramater1.Add("@ActionCode", requestStage.ActionCode);
                paramater1.Add("@UserID", @UserID);
                paramater1.Add("@Justification", requestStage.Justification);

                var affectedRows = await con.ExecuteAsync("[ESS].ApprovalRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                 
                if (requestStage.ActionCode == "COR02")// اعتماد
                {
                    List<NextStageVM> nextStageVMs = await GetNextStageInfo(requestStage.RequestID, UserID);
                    if (nextStageVMs != null)
                    {
                        foreach (NextStageVM item in nextStageVMs)
                        {
                            if (item.UserId != null)
                            {
                                await notificationConcrete.SaveNotification(requestStage.RequestID, false, "NOT01", Convert.ToInt32(item.UserId), 1, UserID);

                            }
                        }
                    }
                }
                else if (requestStage.ActionCode == "COR03")// رفض
                {
                    await notificationConcrete.SaveNotification(requestStage.RequestID, false, "NOT01", Convert.ToInt32(request.UserID), 2, UserID);
                }

                if (affectedRows > 0)
                    return true;
                return false;
            }

        }

        public async Task<string> GetNextPrivateNumber()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {

                var x = con.Query<string>("[ess].GetRequestPrivateNumber", null, null, true, 0, commandType: CommandType.StoredProcedure).SingleOrDefault();
                return x;

            }

        }

        void checkBissines(RequestViewModel requestVM, int UserID, string pAction)
        {

            #region "Bussines"
            var stageType = _context.OrderStageTypes.Where(p => p.StageTypeID == 1 && p.RequestTypeID == requestVM.request.RequestTypeID);
            if (stageType.Count() == 0)
            {
                throw new Exception("MSG_STAGE_NOT_FOUND");
            }

            var requestType = _context.RequestTypes.Where(p => p.RequestTypeID == requestVM.request.RequestTypeID).FirstOrDefault();
            if (requestType == null) return;
            if (requestType.IsNeedAttachment == true && (requestVM.attachments == null || requestVM.attachments.Count() == 0))
            {
                throw new Exception("MSG_MUST_ADD_ATTACHMENT");
            }

            PortalSetting portalSetting = _context.PortalSettings.FirstOrDefault();
            Employee employee = _context.EmployeeInfoView.Where(p => p.EmployeeID == requestVM.request.EmployeeID).FirstOrDefault();

            if (pAction == "insert" || pAction == "update")
            {
                switch (requestVM.request.RequestTypeID)
                {
                    case 5:
                        break;
                    case 51:
                        if (employee != null)
                        {
                            if (portalSetting.NumberSalaryForLoan != null)
                            {
                                string amount = getExtraFieldValue(requestVM.RequestExtraFields, 10);
                                if (amount != null && Convert.ToDecimal(amount) > (portalSetting.NumberSalaryForLoan * Convert.ToDecimal(employee.BASICSALARY)))
                                {
                                    throw new Exception("MSG_1_#" + (portalSetting.NumberSalaryForLoan * Convert.ToDecimal(employee.BASICSALARY)).ToString());
                                }
                            }
                            if (portalSetting.NoOfInstallmentForLoan != null)
                            {
                                string NoOfInstallmentForLoan = getExtraFieldValue(requestVM.RequestExtraFields, 13);
                                if (NoOfInstallmentForLoan != null && Convert.ToInt16(NoOfInstallmentForLoan) > portalSetting.NoOfInstallmentForLoan)
                                {
                                    throw new Exception("MSG_2_#" + portalSetting.NoOfInstallmentForLoan + 1);
                                }
                            }
                            //if (portalSetting.NoOfMonthAfterJoinForLoan != null)
                            //{                            
                            //    if (employee.JOININGDATE > portalSetting.NoOfMonthAfterJoinForLoan)
                            //    {
                            //        throw new Exception("MSG_3_#" + portalSetting.NoOfMonthAfterJoinForLoan);
                            //    }
                            //}
                        }
                        break;
                    case 35:// اجازة
                        string value;
                        if (employee != null)
                        {
                            if (portalSetting.LessNumberDayVacation != null)
                            {
                                value = getExtraFieldValue(requestVM.RequestExtraFields, 28);
                                if (value != null && Convert.ToInt16(value) < portalSetting.LessNumberDayVacation)
                                {
                                    throw new Exception("MSG_4_#" + portalSetting.LessNumberDayVacation);
                                }
                            }
                        }
                        string leaveTypeID = getExtraFieldValue(requestVM.RequestExtraFields, 23);
                        var vacationType = _context.VactionTypesViews.Where(p => p.ID.ToString() == leaveTypeID.ToString()).FirstOrDefault();
                        if (vacationType != null)
                        {
                            if (vacationType.IsNeedReplacementEmp)
                            {
                                value = getExtraFieldValue(requestVM.RequestExtraFields, 24);
                                if (value == null) throw new Exception("MSG_REQUET_NEED_REPLACEMENT_EMPLOYEE");
                                if (requestVM.request.EmployeeID.ToString() == value) throw new Exception("MSG_REQUET_REPLACEMENT_EMPLOYEE_THE_SAME");
                            }

                            value = getExtraFieldValue(requestVM.RequestExtraFields, 28); //Days
                            if (value != null && Convert.ToInt16(value) > vacationType.MaxDays)
                            {
                                throw new Exception("MSG_5_#" + vacationType.MaxDays);
                            }
                        }
                        break;
                    case 40: //نهاية الخدمة
                        break;

                    case 20: //تاشيرة فيزا
                        break;
                }

            }

            switch (pAction)
            {
                case "insert":
                    break;
                case "update":
                    if (UserID != requestVM.request.UserID)
                    {
                        throw new Exception("NOT_HAVE_PERMISSION_EDIT_THIS_REQUEST");
                    }
                    if (requestVM.request.StatusCode != enumsType.RequestStatus.NewRequest)
                    {
                        throw new Exception("MSG_REQUET_NOT_NEW_STAGE");
                    }
                    break;
                case "delete":
                    break;
            }

            #endregion




        }

        private string getExtraFieldValue(List<RequestExtraField> requestExtraField, int pExtraFieldTypeID)
        {
            if (requestExtraField.Where(p => p.ExtraFieldTypeID == pExtraFieldTypeID).Count() > 0)
            {
                var x = requestExtraField.Where(p => p.ExtraFieldTypeID == pExtraFieldTypeID).FirstOrDefault();
                return x.Value;
            }
            return null;
        }
    }
}
