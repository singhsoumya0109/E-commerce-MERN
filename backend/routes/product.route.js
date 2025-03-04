import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getFeauturedProducts,
  createProduct,
  deleteProduct,
  getRecommendations,
  getProductsByCategory,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

router.get("/", protectRoute, adminRoute,getAllProducts);
router.get("/feautured", getFeauturedProducts);
router.get("/recommendations", getRecommendations);
router.get("/category/:category", getProductsByCategory);
router.post("/", protectRoute, adminRoute, createProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

//1:41:52

export default router;