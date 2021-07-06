

using EssPortal.Models;
using EssPortal.Models.searchVM;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IEvaluationRepository : IGenericRepository<Evaluation>
    {
        Task<Evaluation> saveEvaluation(EvaluationViewModel evaluationVM, int UserID);
        Task<Evaluation> updateEvaluation(EvaluationViewModel evaluationVM, int UserID);
        Task<List<dynamic>> getEvalCommunityInfo(long pEmployeeID, long pEvalCommunityID);
        Task<List<dynamic>> getEvalCharterCommunityInfo(long pEmployeeID, long pEvalPeriodID, long pEvalCommunityID);
        Task<EvaluationViewModel> getEvalResultInfo(int pEvaluationID, int pUserID);
        Task<List<dynamic>> searchEvaluationInfo(long pEvalPeriodID, long pEvalCommunityID, long pEmployeeID, long pManagerID, int UserID);
        void ApproveRejectEvaluation(EvalVM evaluationVM);
        Task<bool> DeleteEvaluation(int pEvaluationID, int pUserID);
    }

}
