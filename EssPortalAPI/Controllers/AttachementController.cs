using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortalAPI.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AttachementController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly AppSettings _appSettings;
        private readonly IAttachmentRepository _attachmentRepository;
        public AttachementController(IAttachmentRepository attachmentRepository, IHostingEnvironment hostingEnvironment, IOptions<AppSettings> appSettings)
        {
            _hostingEnvironment = hostingEnvironment;
            _appSettings = appSettings.Value;
            _attachmentRepository = attachmentRepository;
            if (string.IsNullOrWhiteSpace(_hostingEnvironment.WebRootPath))
            {
                _hostingEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }
        }

      

        [HttpPost, DisableRequestSizeLimit]
        [Route("upload")]
        public ActionResult PostFile()
        {
            var files = Request.Form.Files;

            foreach (var file in files)
            {
                var filename = ContentDispositionHeaderValue
                              .Parse(file.ContentDisposition)
                              .FileName
                              .Trim('"');

                var savePath = Path.Combine(_hostingEnvironment.ContentRootPath, "uploads", filename);

                using (var fileStream = new FileStream(savePath, FileMode.Create))
                {
                    file.OpenReadStream().CopyTo(fileStream);
                }
                return Created(savePath, file);
            }
            return Ok();
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("UploadFile/{referenceID}")]
        public async Task<IActionResult> UploadFileAsync([FromRoute] int referenceID)
        {
            try
            {
                var file = Request.Form.Files[0];
                string folderName = "Upload";
                string webRootPath = _hostingEnvironment.WebRootPath;

                string newPath = Path.Combine(webRootPath, folderName);

                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    int maxFileSize =Convert.ToInt16( _appSettings.MaxFileSize);//MB

                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);

                    Int64 fileSize = file.Length;
                    if (fileSize > (maxFileSize * 1024 * 1024))
                    {
                        return BadRequest("Filesize of image is too large. Maximum file size permitted is " + maxFileSize + "MB");
                       // return Json("Filesize of image is too large. Maximum file size permitted is " + maxFileSize + "KB"); 
                    }

                    //check that the file is of the permitted file type
                    string fileExtension = Path.GetExtension(fileName);

                    fileExtension = fileExtension.ToLower();

                    string[] acceptedFileTypes = _appSettings.AcceptedFileTypes.Split(',');
                    

                    bool acceptFile = false;

                    for (int i = 0; i <= acceptedFileTypes.Length - 1; i++)
                    {
                        if (fileExtension == acceptedFileTypes[i])
                        {
                            acceptFile = true;
                            break;
                        }
                    }

                    if (!acceptFile)
                    {
                        return BadRequest("The file you are trying to upload is not a permitted file type!");
                        //return Json("The file you are trying to upload is not a permitted file type!");

                    }
                    var fiName = Guid.NewGuid().ToString() + Path.GetExtension(fileName);
                    byte[] p1 = null;

                    if (_appSettings.UploadFileToDataBase == "0")
                    {
                        using (var stream = new FileStream(Path.Combine(newPath, fiName), FileMode.Create))//حفظ الملف في upload
                        {
                            file.CopyTo(stream);
                        } 
                    }
                    else
                    { 
                        using (var fs1 = file.OpenReadStream())
                        using (var ms1 = new MemoryStream())
                        {
                            fs1.CopyTo(ms1);
                            p1 = ms1.ToArray();
                        } 
                       
                    }
                    Attachment blog = new Attachment
                    {
                        ReferenceID= referenceID,
                        FileContent = p1,
                        FileType = GetContentType(fullPath),
                        FileName = fiName
                    }; 

                    var obj = await _attachmentRepository.SaveAttachment(blog);

                    string json = JsonConvert.SerializeObject(new
                    {
                        results = new Result { attachmentID = obj.AttachmentID, fileName= fiName, message = "Upload Successful." }
                    });
                    return Ok(json);
                    //return Json(json);

                }
                return Ok("Upload Successful.");
                //
                //return Json("Upload Successful.");

            }
            catch (System.Exception ex)
            {
                return BadRequest("Upload Failed: " + ex.Message);
                //return Json("Upload Failed: " + ex.Message);
            }
        }
         
        [HttpGet]
        [Route("downloadFile")]
        public async Task<IActionResult> Download([FromQuery] int AttachmentID)
        {
            //جلب الملف من السيرفر upload

            var result = _attachmentRepository.Find(p => p.AttachmentID == AttachmentID);
            if (result != null)
            {
                if (_appSettings.UploadFileToDataBase == "0")
                {
                    var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "Upload");
                    var filePath = Path.Combine(uploads, result.FileName);
                    if (!System.IO.File.Exists(filePath))
                        return NotFound();

                    var memory = new MemoryStream();
                    using (var stream = new FileStream(filePath, FileMode.Open))
                    {
                        await stream.CopyToAsync(memory);
                    }
                    memory.Position = 0;
                    return File(memory, GetContentType(filePath), result.FileName);
                }
                else
                {
                    
                        Stream stream2 = new MemoryStream(result.FileContent);
                        return File(stream2, result.FileType, result.FileName); // result.FileType);
                 
                }

            }
            else
            {
                return NotFound();
            }

        }
         

        [HttpGet]
        [Route("files/{ReferenceID}")]
        public async Task<IActionResult> Files([FromRoute] int ReferenceID)
        {
            var result = new List<ResultLoadImage>();

            if (_appSettings.UploadFileToDataBase == "0")
            {
                var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "Upload");
                if (Directory.Exists(uploads))
                {
                    int key = 0;
                    var provider = _hostingEnvironment.ContentRootFileProvider;
                    foreach (string fileName in Directory.GetFiles(uploads))
                    {
                        var fileInfo = provider.GetFileInfo(fileName); 
                        result.Add(new ResultLoadImage(++key,0, fileInfo.Name));
                    }
                }
                return Ok(result);
            }
            else
            {
                var obj =await _attachmentRepository.FindAllAsync(p => p.ReferenceID == ReferenceID);
                foreach (var fileInfo in obj)
                {
                    result.Add(new ResultLoadImage(fileInfo.AttachmentID, fileInfo.ReferenceID, fileInfo.FileName));
                } 
                return Ok(result);
            } 
            //Dictionary<int, string> result = new Dictionary<int, string>(); 
        }

        [HttpDelete]
        [Route("DeleteFile/{AttachmentID}")]
        public async Task<IActionResult> DeleteFile( int AttachmentID)
        { 
            var result = _attachmentRepository.Find(p => p.AttachmentID == AttachmentID);
            if (result != null)
            {
                if (_appSettings.UploadFileToDataBase == "0")
                {
                    var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "Upload");
                    var filePath = Path.Combine(uploads, result.FileName);
                    if (!System.IO.File.Exists(filePath))
                        return NotFound();

                    System.IO.File.Delete(filePath);
                    return Ok();
                }
                else
                {
                  await  _attachmentRepository.DeleteAttachment(AttachmentID);
                    return Ok();
                }

            }
            else
            {
                return NotFound();
            }
        }

        private string GetContentType(string path)
        {
            var provider = new FileExtensionContentTypeProvider();
            string contentType;
            if (!provider.TryGetContentType(path, out contentType))
            {
                contentType = "application/octet-stream";
            }
            return contentType;
        } 

    }
    class Result
    {
        
        public string message { get; set; }
        public int attachmentID { get; set; }
        public int referenceID { get; set; }
        public string fileName { get; set; }
    }
    class ResultLoadImage
    {
        public int attachmentID { get; set; }
        public int referenceID { get; set; }        
        public string fileName { get; set; }
        public ResultLoadImage(int id,int referenceID, string fileName)
        {
            this.attachmentID = id;
            this.referenceID = referenceID;
            this.fileName = fileName;
        }
    }
}
