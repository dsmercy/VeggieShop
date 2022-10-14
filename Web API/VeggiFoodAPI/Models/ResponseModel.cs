namespace VeggiFoodAPI.Models
{
    public class ResponseModel
    {
        public bool Success { get; set; }
        public Object Data { get; set; }
        public List<string> Errors { get; set; }
    }
}
