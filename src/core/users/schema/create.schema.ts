import Joi from "joi";

const create = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

export default create;
