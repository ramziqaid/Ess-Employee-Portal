using EssPortal.ViewModels;

namespace EssPortal.Interface
{
    public interface IGenerateRecepit
    {
        GenerateRecepitViewModel Generate(int paymentId);
    }
}