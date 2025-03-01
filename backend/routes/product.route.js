import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getFeauturedProducts,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

router.get("/", protectRoute, adminRoute,getAllProducts);
router.get("/feautured", getFeauturedProducts);

//1:41:52

export default router;