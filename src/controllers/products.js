import Products from "../models/categories.js";

export const getProducts = async () => {};

export const getProductById = async () => {};

export const createProduct = async (req, res) => {
  const newProduct = await Products.create(req.body);
  if (newProduct) {
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const updateProduct = async () => {};

export const deleteProduct = async () => {};
