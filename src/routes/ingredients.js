import { Router } from "express";
import {
  createIngredient,
  deleteIngredient,
  getIngredientById,
  getIngredients,
  updateIngredient,
} from "../controllers/ingredients.js";

const router = Router();

router.get("/", getIngredients);
router.get("/:id", getIngredientById);
router.post("/", createIngredient);
router.patch("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

export default router;
