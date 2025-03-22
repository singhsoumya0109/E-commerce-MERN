import mongoose from "mongoose";
import User from "../models/user.model.js"; // Adjust the path as needed
import dotenv from "dotenv";

dotenv.config();

const clearAllCarts = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
    });

    const result = await User.updateMany({}, { $set: { cartItems: [] } });

    console.log(`Cart cleared for ${result.modifiedCount} users.`);
    mongoose.connection.close();
  } catch (error) {
    console.error("Error clearing carts:", error);
    mongoose.connection.close();
  }
};

clearAllCarts();
