import Ingredients from "../models/ingredients.js";

export const getIngredients = async (req, res) => {
  const categories = await Ingredients.getAll();
  res.status(200).json(categories);
};

export const getIngredientById = async (req, res) => {
  const id = req.params.id;
  const ingredient = await Ingredients.getById(id);
  if (ingredient) {
    res.status(200).json(ingredient);
  } else {
    res.status(404).json({ message: "No category found." });
  }
};

export const createIngredient = async (req, res) => {
  const newIngredient = await Ingredients.create(req.body);
  if (newIngredient) {
    res.status(201).json(newIngredient);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const updateIngredient = async (req, res) => {
  const updated = await Ingredients.update(req.params.id, req.body);
  if (updated) {
    res.status(201).json(updated);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const deleteIngredient = async (req, res) => {
  const deleted = await Ingredients.delete(req.params.id);
  if (deleted) {
    res.status(200).json(deleted);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};
