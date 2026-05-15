# Employee Management System - Frontend

A modern, responsive, and feature-rich frontend for the Employee Management Application, built using React and styled with Tailwind CSS v4. This application provides a seamless user interface for managing employee records with full CRUD (Create, Read, Update, Delete) functionality.

## ✨ Key Features

- **Employee Dashboard**: View all employees in a clean grid layout.
- **Dynamic Forms**: Create and edit employee details with real-time validation using `react-hook-form`.
- **Responsive Design**: Built with Tailwind CSS v4 to ensure a great experience on all devices.
- **Smooth Navigation**: Client-side routing with `react-router` v7.
- **Context API**: Global state management for cross-component data sharing.

## 🚀 Technologies Used

- **React (v19)**: The core library for building the user interface.
- **Vite**: A fast and modern build tool for development.
- **Tailwind CSS (v4)**: For high-performance, modern styling.
- **React Router (v7)**: For managing application navigation and routing.
- **React Hook Form**: For efficient and performant form handling and validation.
- **Axios**: For making HTTP requests to the backend API.
- **Zustand**: Integrated for scalable state management.

## 📋 Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## 🛠️ Setup and Installation

1. **Navigate to the Frontend directory**:
   ```powershell
   cd frontend
   ```

2. **Install Dependencies**:
   ```powershell
   npm install
   ```

3. **Configure API URL**:
   Ensure the backend is running at `http://localhost:5000`. The frontend is pre-configured to communicate with this address.

4. **Start the Development Server**:
   ```powershell
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── components/      # Reusable UI components (Home, EmployeeList, CreateEmployee, etc.)
│   ├── contexts/        # React Context objects for global state
│   ├── store/           # Zustand store configurations
│   ├── App.jsx          # Main application component and routing logic
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind directives
├── public/              # Static assets
└── package.json         # Project metadata and dependencies
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 📝 Author
Developed as part of the MERN Stack Portfolio.
