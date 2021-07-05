using System;
using System.Collections.Generic;
using System.Text;

namespace EssPortal.Interface
{
   public interface ILoggerManager
    {
        void LogInfo(string message);

        void LogError(string message);

        void LogDebug(string message);

        void LogWarring(string message);
    }
}
