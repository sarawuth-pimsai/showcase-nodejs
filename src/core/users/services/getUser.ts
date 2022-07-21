import { User, UserID } from "../user";

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

export default getUser;
