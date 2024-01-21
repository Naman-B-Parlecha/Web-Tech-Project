import { Router } from "express";

import {getAllDishes,getOneDish} from "../controllers/dishes.controllers.js";
import {findUser,addUser} from "../controllers/users.controllers.js";

const router = Router();

router.get("/api/v1/dishes", getAllDishes);
router.get("/api/v1/dishes/:d_id",getOneDish);
router.get("/api/v1/user",findUser);
router.post("/api/v1/user",addUser);

export default router;