import { EmployeeModel } from "../models/employeeModel.js";

// Create employee
export const createEmployee = async (req, res, next) => {
    try {
        const newEmployee = req.body;
        const newEmployeeDocument = new EmployeeModel(newEmployee);
        const result = await newEmployeeDocument.save();
        res.status(201).json({ message: "Employee Created" });
    } catch (err) {
        next(err);
    }
};

// Get all employees
export const getAllEmployees = async (req, res, next) => {
    try {
        const employeesList = await EmployeeModel.find();
        res.status(200).json({ message: "Employees", payload: employeesList });
    } catch (err) {
        next(err);
    }
};

// Update employee
export const updateEmployee = async (req, res, next) => {
    try {
        const modifiedEmployee = req.body;
        const eid = req.params.id;
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
            eid,
            { $set: { ...modifiedEmployee } },
            { returnDocument: "after", runValidators: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee Not Found" });
        }
        res.status(200).json({ message: "Employee Updated", payload: updatedEmployee });
    } catch (err) {
        next(err);
    }
};

// Delete employee
export const deleteEmployee = async (req, res, next) => {
    try {
        const eid = req.params.id;
        const deletedEmployee = await EmployeeModel.findByIdAndDelete(eid);
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee Not Found" });
        }
        res.status(200).json({ message: "Employee Deleted", payload: deletedEmployee });
    } catch (err) {
        next(err);
    }
};
