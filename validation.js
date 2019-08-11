const Joi = require('@hapi/joi');
const registrationValidation=()=>{
    const schema= {
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6).
        required(),
        password: Joi.string()
        .min(6)
        .required()
    }
    return Joi.validate(data, schema);
}

const logValidation=()=>{
    const schema= {
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6).
        required(),
        password: Joi.string()
        .min(6)
        .required()
    }
    return Joi.validate(data, schema);
}
module.exports.registrationValidation = registrationValidation;
module.exports.logValidation = logValidation;
