// Create a mini-express app (Separate route)
import exp from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
    userLogin,
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
    addProductToCart
} from "../controllers/UserController.js";

export const userApp = exp.Router();

// DEFINE USER REST API ROUTES

// User login Route
userApp.post("/auth", userLogin);

// Create new User
userApp.post("/users", createUser);

// Read all users (protected route)
userApp.get("/users", verifyToken, getAllUsers);

// Read a user by email (protected route)
userApp.get("/user", verifyToken, getUserByEmail);

// Update a user by id (protected route)
userApp.put("/users/:id", verifyToken, updateUser);

// Delete a user by id
userApp.delete("/users/:id", verifyToken, deleteUser);

// Add product to cart
userApp.put("/cart/product-id/:pid", verifyToken, addProductToCart);