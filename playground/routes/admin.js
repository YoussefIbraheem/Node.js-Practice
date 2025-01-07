import { Router } from "express";
import {
  getAddProduct,
  postAddProduct,
} from "../controllers/AdminController.js";
const router = Router();

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

export default router;
