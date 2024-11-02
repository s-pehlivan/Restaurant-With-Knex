import Category from "../models/categories.js";

export const getCategories = async (req, res) => {
  const categories = await Category.getAll();
  res.status(200).json(categories);
};

export const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const category = await Category.getById(id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ message: "No category found" });
  }
};

export const createCategory = async (req, res) => {
  const newCategory = await Category.create(req.body);
  if (newCategory) {
    res.status(201).json(newCategory);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const updateCategory = async (req, res) => {
  const updated = await Category.update(req.params.id, req.body);
  console.log("updated", updated);
  if (updated) {
    res.status(201).json(updated);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const deleteCategory = async (req, res) => {
  const deleted = await Category.delete(req.params.id);
  if (deleted) {
    res.status(200).json(deleted);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};
