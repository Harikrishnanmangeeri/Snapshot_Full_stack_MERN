const Joi = require('joi')

const joiuserschema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})
module.exports={joiuserschema}