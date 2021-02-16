const Joi = require("joi");

module.exports = {
  POST: Joi.object().keys({
    body: Joi.object().keys({
      emailAddress: Joi.string().email().max(200).required(),
      password: Joi.string().max(99).required(),
    }),
  }),
};
