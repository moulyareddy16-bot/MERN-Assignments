# Employee Management App (MERN Stack)

A comprehensive, full-stack Employee Management Application designed for efficiency and ease of use. This project demonstrates a complete MERN stack implementation with a clean architecture, robust validation, and a modern user interface.

## 🌟 Overview

The Employee Management App allows organizations to manage their employee records effortlessly. It features a React-based frontend for a smooth user experience and a modular Node.js/Express backend with MongoDB for reliable data storage.

### 🏗️ Architecture

- **Frontend**: [frontend](./frontend) - Built with React 19, Vite, and Tailwind CSS v4.
- **Backend**: [backend](./backend) - Built with Express 5, Mongoose 9, and modular routing.

## ✨ Core Features

- **Full CRUD Operations**: Create, Read, Update, and Delete employee records.
- **Data Validation**: Client-side validation with `react-hook-form` and server-side validation with Mongoose schemas.
- **Modular Backend**: Clean separation of routes, controllers, and models.
- **Responsive UI**: Fully responsive design that works on desktops, tablets, and mobile phones.
- **Modern Styling**: Powered by the latest Tailwind CSS v4 features.

## 📋 Prerequisites

- **Node.js**: v18.x or higher
- **NPM**: v9.x or higher
- **MongoDB**: Local installation or a MongoDB Atlas account.

## 🚀 Quick Start

To get the entire application running, follow these steps:

### 1. Setup Backend
```powershell
cd backend
npm install
# Ensure your .env is configured with PORT and DB_URL
npm start
```

### 2. Setup Frontend
```powershell
cd ../frontend
npm install
npm run dev
```

The application will be live at `http://localhost:5173`, connecting to the backend API at `http://localhost:5000`.

## 📁 Project Folder Structure

```text
EMP-APP/
├── backend/             # Node.js & Express API
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   └── models/          # Database schemas
└── frontend/            # React & Vite application
    ├── src/             # Source code
    └── public/          # Static assets
```

## 📚 Detailed Documentation

For more specific information, please refer to the individual README files in each directory:
- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

---
Developed by Moulya Reddy as part of the MERN Stack Portfolio.
