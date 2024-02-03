import { Router } from "express";

import {getAllDishes,getOneDish} from "../controllers/dishes.controllers.js";
import {updateCart} from "../controllers/users.controllers.js";

const router = Router();

router.get("/api/v1/dishes", getAllDishes);
router.get("/api/v1/dishes/:d_id",getOneDish);

router.post("/api/v1/user/:u_id/cart",updateCart);

export default router;