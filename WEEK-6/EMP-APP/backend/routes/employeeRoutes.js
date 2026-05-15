import exp from "express";
import { 
    createEmployee, 
    getAllEmployees, 
    updateEmployee, 
    deleteEmployee 
} from "../controllers/employeeController.js";

export const employeeApp = exp.Router();

// Define routes
employeeApp.post("/employees", createEmployee);
employeeApp.get("/employees", getAllEmployees);
employeeApp.put("/employees/:id", updateEmployee);
employeeApp.delete("/employees/:id", deleteEmployee);