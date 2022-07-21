import { User, UserID } from "./user";
import userSchema from "./user-schema";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

export interface IUserService {
  getUser(id: UserID): Promise<User>;
  getUsers(): Promise<User[]>;
  createUser(user: CreateUserDto): Promise<boolean>;
  updateUser(id: UserID, user: UpdateUserDto): Promise<boolean>;
  deleteUser(id: UserID): Promise<boolean>;
}

const getUser = (id: UserID): Promise<User> => {
  return new Promise((resolve, rejects) => {
    const user: User = {
      id: "12",
      firstName: "sarawuth",
      lastName: "pimsai",
    };
    resolve(user);
  });
};

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve, rejects) => {
    const users = [];
    resolve(users);
  });
};
const createUser = (user: CreateUserDto): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    const { value, error } = userSchema.userCreateSchema.validate(user);
    console.log({ validate: { value, error } });
    if (error) rejects(error);
    resolve(true);
  });
};
const updateUser = (id: UserID, user: UpdateUserDto): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    resolve(true);
  });
};
const deleteUser = (id: UserID): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    resolve(true);
  });
};

const userService: IUserService = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
