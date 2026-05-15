import exp from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} from "../controllers/ProductController.js"

export const productApp = exp.Router()

// DEFINE PRODUCT REST APIs
// Create new product
productApp.post("/products", createProduct)

// Read all Products
productApp.get("/products", verifyToken, getAllProducts)

// Read product by id
productApp.get("/products/:id", verifyToken, getProductById)

// Update a product by productId
productApp.put("/products/:id", verifyToken, updateProduct)

// Delete a product by productId
productApp.delete("/products/:id", verifyToken, deleteProduct)

