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

export const UserControllers = {
  userCreate,
};
