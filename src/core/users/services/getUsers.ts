import { User } from "../user";

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve, rejects) => {
    const users = [];
    resolve(users);
  });
};
export default getUsers;
