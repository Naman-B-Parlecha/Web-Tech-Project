import { Router } from "express";

import {findUser,addUser} from "../controllers/users.controllers.js";

const router = Router();

router.get("/api/v1/user",findUser);
router.post("/api/v1/user",addUser);

export default router;