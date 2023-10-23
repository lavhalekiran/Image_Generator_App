
const {OpenAI}=require("openai")


const openai=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,

});
const generateImage=async (req,res) =>{
    const {prompt}=req.body
    
   try {
        const response=await openai.images.generate({

            prompt,
            n:2,
            size:"512x512"

        });
        const image_result=response.data;
        res.status(200).json({
            success:true,
            data:image_result
           });
   } catch (error) {
     console.log(error)   
   }
   

   
}
module.exports={generateImage};