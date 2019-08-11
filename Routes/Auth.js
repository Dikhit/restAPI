const router = require('express').Router();
const User = require('../Module/UserModule');
const { registrationValidation } = require('../validation')
//validations

router.post( '/register', async( req,res )=>{

    const { error }=registrationValidation(req.body);
    res.send(error)
    if(error){
        return res.status(400).send(error);
    }
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;