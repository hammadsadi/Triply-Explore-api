import { Router } from 'express';
import { UserControllers } from './user.controllers';

// Init Route
const router = Router();

router.post('/', UserControllers.userCreate);
router.get('/', UserControllers.userGet);
router.get('/:id', UserControllers.singleUserGet);
router.patch('/:id', UserControllers.updateSingleUser);
router.delete('/:id', UserControllers.deleteSingleUser);

export const UserRoutes = router;
