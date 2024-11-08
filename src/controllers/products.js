import Products from "../models/products.js";

export const getProducts = async (req, res) => {
  const products = await Products.getAll();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const product = await Products.getById(req.params.id);
  console.log("product", product);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "No product for that id" });
  }
};

export const createProduct = async (req, res) => {
  const newProduct = await Products.create(req.body);
  if (newProduct) {
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const updateProduct = async (req, res) => {
  const updated = await Products.update(req.params.id, req.body);
  if (updated) {
    res.status(201).json(updated);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};

export const deleteProduct = async (req, res) => {
  const deleted = await Products.delete(req.params.id);
  if (deleted) {
    res.status(200).json(deleted);
  } else {
    res.status(400).json({ message: "An error occurred." });
  }
};
