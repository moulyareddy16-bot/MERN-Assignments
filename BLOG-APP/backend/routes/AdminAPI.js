import exp from 'express'
import { verifyToken } from '../middlewares/VerifyToken.js'
import { UserModel } from '../models/UserModel.js'
export const adminApp = exp.Router() 

//Read all users and authors 
adminApp.get("/all", verifyToken("ADMIN"), async (req, res, next) => {
  try {
    //get all users email except admin
    const allowedRoles = ["USER", "AUTHOR"];
    const usersList = await UserModel.find({ role: allowedRoles }, { email: 1 });
    //send res
    res.status(200).json({ message: "Users and Authors", payload: usersList });
  } catch (err) {
    next(err);
  }
});

//Block or Activate user or author
adminApp.patch("/all", verifyToken("ADMIN"), async (req, res, next) => {
  try {
    //get user email from req body
    let { email, isActive } = req.body;
    //get user from email
    const user = await UserModel.findOne({ email: email });
    //if user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //chech its status is same or not
    //if same send res
    if (isActive === user.isUserActive) {
      return res.status(400).json({ message: "User already in the same state" });
    }
    //change status
    user.isUserActive = isActive;
    //save
    await user.save();
    //send res
    res.status(200).json({ message: "User State Updated" });
  } catch (err) {
    next(err);
  }
});