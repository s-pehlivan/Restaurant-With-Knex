import express from "express";
import categoryRoutes from "./routes/categories.js";
import ingredientRoutes from "./routes/ingredients.js";
import productRoutes from "./routes/products.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log("hello");
});
