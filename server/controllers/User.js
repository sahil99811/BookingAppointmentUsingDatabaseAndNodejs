const User=require('../models/User');
exports.addUser=async (req,res)=>{
    try{
        const {email,phoneno,name}=req.body;
        if(!phoneno||!email||!name){
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
              })
        }
        const response=await User.create({
            email:email,
            phoneno:phoneno,
            name:name
        });
        return res.status(200).send({
            success: true,
            data:response,
            message:"user created succesfully",
          })
    }catch(erro){
        console.log(erro);
        return res.status(500).send({
            success: false,
            message: "User cannot be registered. Please try again.",
          })
       
    }
}

exports.deleteUser=async (req,res)=>{
    try{
         const id=req.params.id;
         console.log(id);
         if(!id){
            return res.status(403).send({
                success: false,
                message: "id is required",
              })
         }
         await User.destroy({
            where: {
              id:id
            }
          })
          return res.status(200).send({
            success: true,
            message:"succefully deleted",
          })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "User cannot be deleted. Please try again.",
          })
    }
}

exports.updateUser=async (req,res)=>{
    try{
        const {id,email,phoneno,name}=req.body;
        if(!id||!email||!phoneno||!name){
           return res.status(403).send({
               success: false,
               message: "all fields are required",
             })
        }
        await User.update({email:email,phoneno:phoneno,name:name }, {
            where: {
              id:id
            }
          });
         return res.status(200).send({
           success: true,
           message:"succefully updated",
         })
   }catch(error){
       console.log(error);
       return res.status(500).send({
           success: false,
           message: "User cannot be deleted. Please try again.",
         })
   }
}

exports.getUser=async (req,res)=>{
         const result=await User.findAll().then((result) => {
            return res.status(200).send({
                success: true,
                data:result,
                message:"succefully fetched",
              })
         }).catch((error) => {
            console.log(error);
       return res.status(500).send({
           success: false,
           message: "something went wrong. Please try again.",
         })
         });

}