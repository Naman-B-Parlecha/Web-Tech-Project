import express from "express";
import connectToDatabase from "./config/dbConfig.js";
import dishesRoutes from "./routes/dishes.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors';

const app = express();
const port = 3001;

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(dishesRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});