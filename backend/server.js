import express from "express";
import { connectDB } from "./config/db.js";    
import dotenv from 'dotenv';
import Meal from './models/meal.model.js';
dotenv.config();

const app = express();
app.use(express.json()); // allows to accept json in req.body

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.post("/api/meals", async (req, res) => {
  const meal_name = req.body;
  if(!meal_name) {
    return res.status(400).json({success: false, message: "Please provide all fields"});
  }
  
  const newMeal = new Meal(meal_name);

  try{
    await newMeal.save();
    return res.status(201).json({success: true, data: newMeal});
  } catch(error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({success: false, message: "Server error"});
  }
});

app.listen(5000, () => {
    connectDB();
  console.log("Server started at http://localhost:5000");
});
