import { Request, Response } from 'express';
import { UserServices } from './user.service';

/**
 * @Desc User Create Controller
 * @Param ""
 * @Method POST
 */
const userCreate = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.saveUserToDB(req.body);
    res.json({
      success: true,
      message: 'User Created Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};

/**
 * @Desc Get All User Controller
 * @Param ""
 * @Method GET
 */
const userGet = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.allUserFromDB();
    res.json({
      success: true,
      message: 'User Get Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};

/**
 * @Desc Get Single User Controller
 * @Param ID
 * @Method GET
 */
const singleUserGet = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.singleUserFromDB(req.params.id);
    res.json({
      success: true,
      message: 'Single User Get Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};
/**
 * @Desc Update Single User Controller
 * @Param ID
 * @Method PATCH
 */
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.singleUserUpdateFromDB(req.params.id, req.body);
    res.json({
      success: true,
      message: 'Single User Updated Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};

/**
 * @Desc Delete Single User Controller
 * @Param ID
 * @Method DELETE
 */
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.singleUserDeleteFromDB(req.params.id);
    res.json({
      success: true,
      message: 'Single User Deleted Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};
export const UserControllers = {
  userCreate,
  singleUserGet,
  userGet,
  updateSingleUser,
  deleteSingleUser,
};
