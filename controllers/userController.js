const getUser =(req,res)=>{
    res.send({
        success:true,
        message:"Data coming from MVC Pattern"
    })
}
const addUser =(req,res)=>{
    const { inputData } = req.body;
    res.json({
        success:true,
        message:`Welcome ${ inputData }`
    })
}
const createUser =(req,res)=>{
    //
}

module.exports = { getUser,addUser,createUser }
