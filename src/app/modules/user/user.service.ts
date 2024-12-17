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

/**
 * @Desc Single User Update
 * @Param id
 * @Method PATCH
 */

const singleUserUpdateFromDB = async (id:string, payload: Partial<TUser>) => {
    const {name, ...remaningPayload} =payload;
    // Store Data
    const modefiedData:Record<string, unknown> = {...remaningPayload}
    if(name && Object.keys(name).length){
         for (const [key, value] of Object.entries(name)) {
           modefiedData[`name.${key}`] = value;
         }
    }
  const result = await User.findByIdAndUpdate(id, modefiedData, {new:true})
  return result;
};
/**
 * @Desc Single User Delete
 * @Param id
 * @Method DELETE
 */

const singleUserDeleteFromDB = async (id:string) => {
  const result = await User.findByIdAndDelete(id)
  return result;
};
export const UserServices = {
  saveUserToDB,
  allUserFromDB,
  singleUserUpdateFromDB,
  singleUserFromDB,
  singleUserDeleteFromDB,
};
