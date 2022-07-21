import { UserID } from "../user";

const deleteUser = (id: UserID): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    resolve(true);
  });
};
export default deleteUser;
