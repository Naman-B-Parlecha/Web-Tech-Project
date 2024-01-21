import express from "express";
import connectToDatabase from "./config/dbConfig.js";
import dishesRoutes from "./routes/dishes.routes.js";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

connectToDatabase();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(dishesRoutes);

// app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});