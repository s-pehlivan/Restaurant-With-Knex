import express from "express";
import categoryRoutes from "./routes/categories.js";
import ingredientRoutes from "./routes/ingredients.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/ingredients", ingredientRoutes);

app.listen(port, () => {
  console.log("hello");
});
