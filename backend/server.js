import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import pruductRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", pruductRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
