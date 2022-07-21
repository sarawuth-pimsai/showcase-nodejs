import Joi from "joi";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

export interface IUserSchema {
  userCreateSchema: Joi.ObjectSchema<CreateUserDto>;
  userUpdateSchema: Joi.ObjectSchema<UpdateUserDto>;
}
const userCreateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const userUpdateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const userSchema: IUserSchema = {
  userCreateSchema,
  userUpdateSchema,
};

export default userSchema;
