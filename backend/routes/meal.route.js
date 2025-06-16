import express from "express"
import { getMeals, updateMeal, createMeal, deleteMeal } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getMeals);

router.post("/", createMeal);

router.put("/:id", updateMeal);

router.delete("/:id", deleteMeal);

export default router;