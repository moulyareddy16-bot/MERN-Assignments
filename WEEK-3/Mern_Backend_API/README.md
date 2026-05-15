# 🚀 Backend-2: RESTful API with Mongoose

A robust Node.js and Express-based backend service integrated with MongoDB using Mongoose ODM. This project implements secure user authentication, product management, and a clean MVC architecture.

---

## 🌟 Features

- **JWT Authentication**: Secure user login and protected routes using JSON Web Tokens.
- **MVC Architecture**: Organized codebase with separate Controllers, Models, and APIs (Routes).
- **Password Hashing**: Industry-standard password security using `bcryptjs`.
- **Validation**: Strict schema validation using Mongoose.
- **Global Error Handling**: Centralized middleware for managing validation and server-side errors.
- **Environment Management**: Configuration handled via `.env` files using `dotenv`.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Security**: [JWT](https://jwt.io/), [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- **Utilities**: [Dotenv](https://github.com/motdotla/dotenv), [Cookie-Parser](https://github.com/expressjs/cookie-parser)

---

## 📂 Project Structure

```text
Backend-2/
├── APIs/             # Route definitions (User & Product)
├── controllers/      # Business logic for each resource
├── models/           # Mongoose Schemas & Models
├── middlewares/      # Custom middlewares (Auth, Validation)
├── .env              # Environment variables (Config)
├── server.js         # Application entry point
└── package.json      # Dependencies and scripts
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd Backend-2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=4000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
```

### 4. Run the Application
```bash
# Start in production mode
npm start

# Start in development mode (with watch mode)
npm run dev
```

---

## 🛰️ API Documentation

### User API (`/user-api`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| POST | `/auth` | User login (returns JWT) | No |
| POST | `/users` | Register a new user | No |
| GET | `/users` | Get all users | Yes |
| GET | `/user` | Get current user details | Yes |
| PUT | `/users/:id` | Update user details | Yes |
| DELETE| `/users/:id` | Delete user | Yes |
| PUT | `/cart/product-id/:pid` | Add product to user cart | Yes |

### Product API (`/product-api`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| POST | `/products` | Create a new product | No |
| GET | `/products` | Get all products | Yes |
| GET | `/products/:id` | Get product by ID | Yes |
| PUT | `/products/:id` | Update product details | Yes |
| DELETE| `/products/:id` | Delete product | Yes |

---

## 🛡️ Error Handling
The application uses a centralized error handler in `server.js` to catch:
- `ValidationError`: Returns `400 Bad Request` with validation details.
- `CastError`: Returns `400 Bad Request` for invalid IDs.
- Other Server Errors: Returns `500 Internal Server Error`.

---

## 📜 License
This project is licensed under the [ISC License](LICENSE).