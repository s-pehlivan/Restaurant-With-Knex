import express from "express";
import categoryRoutes from "./routes/categories.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);

app.listen(port, () => {
  console.log("hello");
});
