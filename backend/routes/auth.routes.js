import { Router } from "express";

import {findUser,addUser} from "../controllers/users.controllers.js";

const router = Router();

router.post("/api/v1/user/login",findUser);
router.post("/api/v1/user/register",addUser);

export default router;