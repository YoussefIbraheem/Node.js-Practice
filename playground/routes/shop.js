import express from "express";
import { getProducts } from "../controllers/ShopController.js";
const router = express.Router();

router.get("/",getProducts)

export default router;
