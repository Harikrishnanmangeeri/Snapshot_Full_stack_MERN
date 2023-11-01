const joi = require('joi')

const joicontentSchema =joi.object({
    url :joi.string().required(),
    description:joi.string(),
    title:joi.string().required(),
    category:joi.string().required()
})
module.exports={joicontentSchema}