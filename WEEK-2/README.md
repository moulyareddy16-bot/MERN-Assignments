# MERN Stack - Week 2 Assignments

Welcome to the Week 2 repository for the MERN Stack development course. This week focused on mastering JavaScript ES6+ features, including advanced array methods, object manipulation, asynchronous programming, and modular application design.

## 📁 Repository Structure

The assignments are organized into descriptive standalone scripts and two mini-projects.

### 🚀 Standalone Assignments

| File | Description | Key Concepts |
| :--- | :--- | :--- |
| `shopping_cart_analyzer.js` | Analyzes e-commerce cart data to calculate totals and filter stock. | `filter`, `map`, `reduce` |
| `student_grade_manager.js` | Processes student marks and generates grade reports. | Array processing, Objects |
| `employee_payroll_system.js` | Manages employee salaries, departments, and bonus calculations. | `reduce`, Object spread |
| `movie_rating_portal.js` | Filters and formats movie data for a streaming platform simulator. | `find`, `map`, `filter` |
| `bank_transaction_logger.js` | Calculates account balances from a list of credit/debit transactions. | `reduce`, logic flow |
| `library_management_system.js` | A complete book tracking system using ES6 Classes. | Classes, Methods, State |
| `array_spread_operations.js` | Demonstrates cloning and extending arrays. | Spread Operator `[...]` |
| `object_cloning_spread.js` | Demonstrates shallow cloning and property expansion. | Spread Operator `{...}` |
| `rest_parameter_sum.js` | A variadic function that sums any number of inputs. | Rest Parameters `(...args)` |
| `shallow_copy_demo.js` | Illustrates how nested objects share references in shallow copies. | Memory referencing |
| `deep_copy_demo.js` | Demonstrates true object isolation using `structuredClone`. | Deep Cloning |
| `async_exam_simulator.js` | Simulates an exam submission flow with delayed messages. | `setTimeout`, Event Loop |
| `otp_countdown_timer.js` | A real-time 10-second countdown timer for OTP resends. | `setInterval`, Timers |

### 🛠️ Mini-Projects

#### 1. E-Commerce Backend Logic (`/e-commerce`)
A modularized store backend featuring:
- **Product Management**: Search and filter products by category.
- **Cart System**: Add/remove items with automatic stock validation.
- **Discount Engine**: Apply percentage or flat discounts based on coupon codes and categories.
- **Payment Processing**: Simulated checkout with stock reduction and order summary generation.

#### 2. Task Management System (`/task-management`)
A robust task tracker with:
- **Input Validation**: Ensures titles are valid and priorities are correct.
- **Task Operations**: Add, list, and complete tasks.
- **Modular Design**: Separated concerns across `app.js`, `task.js`, and `validator.js`.

---

## 🛠️ How to Run

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Standalone Scripts**:
   ```bash
   node shopping_cart_analyzer.js
   ```

2. **Mini-Projects**:
   Navigate to the project folder and run the `app.js` file:
   ```bash
   cd e-commerce
   node app.js
   ```

---

## 👨‍💻 Author
*Created by Moulya Reddy*
