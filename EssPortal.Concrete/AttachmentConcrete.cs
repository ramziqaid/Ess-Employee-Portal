using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class AttachmentConcrete : GenericRepository<Attachment>, IAttachmentRepository
    {
        
        private readonly IConfiguration _configuration;

        public AttachmentConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        { 
            _configuration = configuration;
        }

        

        public async Task<Attachment> SaveAttachment(Attachment attachment)
        {
            await _context.Attachments.AddAsync(attachment);
            await _context.SaveChangesAsync();
            return   attachment;
        }

        public async Task<Attachment> UpdateAttachment(Attachment attachment)
        {
              _context.Attachments.Update(attachment);
           
             _context.Entry(attachment).Property(x => x.ReferenceID).IsModified = true;
            _context.Entry(attachment).Property(x => x.FileContent).IsModified = false;
            _context.Entry(attachment).Property(x => x.FileName).IsModified = false;
            _context.Entry(attachment).Property(x => x.FileType).IsModified = false;

            await _context.SaveChangesAsync();
            return attachment;
        }

        public async Task<bool> DeleteAttachment(int attachmentID)
        {
            Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == attachmentID);

            if (obj!= null)
            {
                _context.Attachments.Remove(obj);
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
            return false;


        }
    }
}
