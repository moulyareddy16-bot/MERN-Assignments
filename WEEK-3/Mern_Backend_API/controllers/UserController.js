import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { config } from "dotenv";
config();

// User login Route
export const userLogin = async (req, res) => {
    // get user cred obj from req
    const { email, password } = req.body;
    // verify email
    let user = await UserModel.findOne({ email: email });
    // if email not existed
    if (!user) {
        return res.status(404).json({ message: "Invalid email" });
    }
    // compare passwords
    let result = await compare(password, user.password);
    // if passwords not matched
    if (!result) {
        return res.status(400).json({ message: "Invalid password" });
    }
    // if passwords are matched

    // create token (jsonwebtoken - jwt--jaat)
    const signedToken = sign({ email: email }, process.env.SECRET_KEY, { expiresIn: "2h" });

    // store token as httpOnly cookie 
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    });

    // send res
    res.status(200).json({ message: "login success", payload: user });
};

// Create new User
export const createUser = async (req, res) => {
    // get new user obj from req
    const newUser = req.body;
    // hash the password
    const hashedPassword = await hash(newUser.password, 10);
    // replace plain password with hashed password
    newUser.password = hashedPassword;
    // Create new user document
    const newUserDocument = new UserModel(newUser);
    // save
    const result = await newUserDocument.save();
    console.log("result: ", result);
    // send response
    res.status(201).json({ message: "User Created" });
};

// Read all users
export const getAllUsers = async (req, res) => {
    // read all users from db
    const usersList = await UserModel.find();
    // send res
    res.status(200).json({ message: "Users", payload: usersList });
};

// Read a user by email (from token)
export const getUserByEmail = async (req, res) => {
    // read user email from req
    const emailOfUser = req.user?.email;

    // find user by email
    const userObj = await UserModel.findOne({ email: emailOfUser }).populate("cart.product");
    // if user not found
    if (!userObj) {
        return res.status(404).json({ message: "User Not Found" });
    }
    // send res
    res.status(200).json({ message: "User", payload: userObj });
};

// Update a user by id
export const updateUser = async (req, res) => {
    // get modified user from request
    const modifiedUser = req.body;
    const uid = req.params.id;

    // find user by id and update
    const updatedUser = await UserModel.findByIdAndUpdate(uid, { $set: { ...modifiedUser } }, { new: true, runValidators: true });
    // if user not found
    if (!updatedUser) {
        return res.status(404).json({ message: "User Not Found" });
    }
    // send res
    res.status(200).json({ message: "User Modified", payload: updatedUser });
};

// Delete a user by id
export const deleteUser = async (req, res) => {
    const uid = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(uid);
    if (!deletedUser) {
        return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Deleted", payload: deletedUser });
};

// Add product to cart
export const addProductToCart = async (req, res) => {
    // get product id from req params
    let productId = req.params.pid;

    // get current user details
    const emailOfUser = req.user?.email;

    // add product to cart
    let user = await UserModel.findOne({ email: emailOfUser });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    let res1 = user.cart.find(itemObj => itemObj.product.toString() === productId);
    if (!res1) {
        await UserModel.findOneAndUpdate({ email: emailOfUser }, { $push: { cart: { product: productId } } });
    }
    else {
        res1.count++;
        await user.save();
    }
    
    res.status(200).json({ message: "Product added to cart" });
};
