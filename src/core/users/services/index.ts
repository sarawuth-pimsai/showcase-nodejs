import { User, UserID } from "../user";
import { CreateUserDto, UpdateUserDto } from "../user.dto";
import getUser from "./getUser";
import getUsers from "./getUsers";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

export interface IUserService {
  getUser(id: UserID): Promise<User>;
  getUsers(): Promise<User[]>;
  createUser(user: CreateUserDto): Promise<boolean>;
  updateUser(id: UserID, user: UpdateUserDto): Promise<boolean>;
  deleteUser(id: UserID): Promise<boolean>;
}

const userService: IUserService = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
export default userService;
