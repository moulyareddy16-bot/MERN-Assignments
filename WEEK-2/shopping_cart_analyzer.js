/**
 * ASSIGNMENT 1: Shopping Cart Summary
 * Objective: Process e-commerce cart data using array methods.
 */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Filter in-stock products only
const instockProducts = cart.filter((item) => item.inStock === true);
console.log("In-stock products are:", instockProducts);

// 2. Map to create a new array with name and totalPrice (price * quantity)
const cartSummary = cart.map((item) => {
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  };
});
console.log("Cart Summary (Name & Total Price):", cartSummary);

// 3. Reduce to calculate grand total (accounting for quantity)
const grandTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log("Grand Total is:", grandTotal);

// 4. Find the details of "Mouse"
const mouse = cart.find(item => item.name === "Mouse");
console.log("Details of Mouse:", mouse);

// 5. Find index of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("The index of Keyboard is:", keyboardIndex);
