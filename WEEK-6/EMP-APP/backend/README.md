# Employee Management System - Backend

A robust and modular backend for the Employee Management Application, built using the MERN stack (MongoDB, Express.js, and Node.js). This project implements a clean Separation of Concerns using the Router-Controller-Model pattern.

## 🚀 Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js (v5.2.1)**: Web framework for building the RESTful API.
- **MongoDB & Mongoose (v9.3.3)**: NoSQL database and Object Data Modeling (ODM) library.
- **dotenv**: For managing environment variables.
- **CORS**: To enable Cross-Origin Resource Sharing with the frontend.

## 📋 Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or an Atlas URI)

## 🛠️ Setup and Installation

1. **Navigate to the Backend directory**:
   ```powershell
   cd backend
   ```

2. **Install Dependencies**:
   ```powershell
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root of the `backend` folder and add the following:
   ```env
   PORT = 5000
   DB_URL = mongodb://localhost:27017/emp_backend
   ```

4. **Run the Server**:
   You can start the server using the following command:
   ```powershell
   node server.js
   ```
   *(Optional: If you have nodemon installed, you can use `nodemon server.js` for automatic restarts during development.)*

## 📁 Project Structure

The project follows a modular structure for better maintainability:

```text
backend/
├── controllers/
│   └── employeeController.js   # Contains the business logic for each route
├── models/
│   └── employeeModel.js        # Defines the Employee schema and validation rules
├── routes/
│   └── employeeRoutes.js       # Defines the API endpoints and links to controllers
├── .env                        # Environment configuration (Private)
├── server.js                   # Entry point of the application
└── package.json                # Project dependencies and scripts
```

## 🛣️ API Endpoints

All routes are prefixed with `/employee-api`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/employee-api/employees` | Create a new employee |
| **GET** | `/employee-api/employees` | Get a list of all employees |
| **PUT** | `/employee-api/employees/:id` | Update an existing employee by ID |
| **DELETE** | `/employee-api/employees/:id` | Delete an employee by ID |

## 🛡️ Error Handling

The project includes a global error-handling middleware in `server.js` that catches:
- **Validation Errors**: Returns a 400 status with specific field errors.
- **Cast Errors**: Handles invalid MongoDB ObjectIDs.
- **Server Errors**: Returns a 500 status for any unexpected issues.

## 📝 Author
Developed as part of the MERN Stack Portfolio.
