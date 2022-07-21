import userSchema from "../user-schema";
import { CreateUserDto } from "../user.dto";

const createUser = (user: CreateUserDto): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    const { value, error } = userSchema.userCreateSchema.validate(user);
    console.log({ validate: { value, error } });
    if (error) rejects(error);
    resolve(true);
  });
};

export default createUser;
