import express from "express";
import { connectDB } from "./config/db.js";    
import dotenv from 'dotenv';
import mealRoutes from "./routes/meal.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allows to accept json in req.body
app.use(express.json()); 

// Prefix everithing in the routes file
app.use("/api/meals", mealRoutes);

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });


app.listen(PORT, () => {
    connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
