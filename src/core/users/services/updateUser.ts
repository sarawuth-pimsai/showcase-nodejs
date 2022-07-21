import { UserID } from "../user";
import { UpdateUserDto } from "../user.dto";

const updateUser = (id: UserID, user: UpdateUserDto): Promise<boolean> => {
  return new Promise((resolve, rejects) => {
    resolve(true);
  });
};
export default updateUser;
