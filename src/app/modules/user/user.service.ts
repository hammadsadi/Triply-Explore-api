import { TUser } from './user.interface';
import { User } from './user.model';
/**
 * @Desc User Create Service
 * @Param ""
 * @Method POST
 */

const saveUserToDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};


/**
 * @Desc All User Get
 * @Param ""
 * @Method GET
 */

const allUserFromDB = async () => {
  const result = await User.find()
  return result;
};
/**
 * @Desc Single User Get
 * @Param id
 * @Method GET
 */

const singleUserFromDB = async (id:string) => {
  const result = await User.findById(id)
  return result;
};
export const UserServices = {
  saveUserToDB,
  allUserFromDB,
  singleUserFromDB,
};
