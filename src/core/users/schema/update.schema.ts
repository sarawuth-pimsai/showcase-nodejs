import Joi from "joi";

const update = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
export default update;
