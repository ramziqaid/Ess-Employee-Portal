

using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IAttachmentRepository : IGenericRepository<Attachment>
    {
        Task<Attachment> SaveAttachment(Attachment attachment);

        Task<Attachment> UpdateAttachment(Attachment attachment);

        Task<bool> DeleteAttachment(int attachmentID);
    }

}
