import Meal from "../models/meal.model.js"
import mongoose from "mongoose";

export const getMeals = async (req, res) => {
  try{
    const meals = await Meal.find({});
    res.status(200).json({success: true, data: meals});

  }catch(error) {
    console.log("error in fetching meals: ", error);
    res.status(500).json({success: false, message: "Server error"});

  }
};

export const createMeal = async (req, res) => {
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
};

export const updateMeal = async(req, res) => {
  const { id } = req.params;
  const meal = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid meal id"});
  }

  try{
    const updated = await Meal.findByIdAndUpdate(id, meal, {new:true});
    res.status(200).json({success: true, data: updated});
  } catch(error){
    res.status(500).json({success: false, message: "Server error"});
  }
};

export const deleteMeal = async (req, res) => {
  const { id } = req.params;
  console.log("id: ",id);

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid meal id"});
  }

  try{
    await Meal.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Meal deleted"});
  } catch (error) {
    console.log("Error in deleting meal");
    res.status(500).json({success: false, message: "Server error"});
  }
};