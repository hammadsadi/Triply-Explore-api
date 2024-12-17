import { Router } from 'express';
import { UserControllers } from './user.controllers';

// Init Route
const router = Router();

router.post('/', UserControllers.userCreate);

export const UserRoutes = router;
