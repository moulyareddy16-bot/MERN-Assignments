import { ProductModel } from "../models/ProductModel.js";

// Create new product
export const createProduct = async (req, res) => {
    // get new product obj from req
    const newProduct = req.body;
    // create new product document
    const newProductDocument = new ProductModel(newProduct);
    // save
    const result = await newProductDocument.save();
    console.log("result: ", result);
    // send response
    res.status(201).json({ message: "Product Created" });
};

// Read all Products
export const getAllProducts = async (req, res) => {
    // read all products from db
    const productsList = await ProductModel.find();
    // send response
    res.status(200).json({ message: "Products", payload: productsList });
};

// Read product by id
export const getProductById = async (req, res) => {
    const pid = req.params.id;
    // find product by id
    const product = await ProductModel.findOne({ productId: pid });
    // if product not found
    if (!product) {
        return res.status(400).json({ message: "" });
    }
    res.status(200).json({ message: "Product", payload: product });
};

// Update a product by productId
export const updateProduct = async (req, res) => {
    // get modified product obj from req
    const modifiedProduct = req.body;
    const pid = req.params.id;
    // find product by id and update
    const updatedProduct = await ProductModel.findOneAndUpdate(
        { productId: pid },
        { $set: { ...modifiedProduct } },
        { new: true, runValidators: true }
    );
    // if product not found
    if (!updatedProduct) {
        return res.status(404).json({ message: "Product Not Found" });
    }
    // send res
    res.status(200).json({ message: "Product Modified", payload: updatedProduct });
};

// Delete a product by productId
export const deleteProduct = async (req, res) => {
    // get id from req
    const pid = req.params.id;
    // find product by id and delete
    const deletedProduct = await ProductModel.findOneAndDelete({ productId: pid });
    // if product not found
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product Not Found" });
    }
    // send res
    res.status(200).json({ message: "Product Deleted", payload: deletedProduct });
};
