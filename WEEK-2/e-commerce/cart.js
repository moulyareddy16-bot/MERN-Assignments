import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  // 1. Get product details
  const pDetails = getProductById(productId);
  if (!pDetails) return "Product Not Available";

  // 2. Check stock availability
  if (!checkStock(productId, quantity)) {
    return "Stock Not Available";
  }

  // 3. Update or add item
  const existingItem = cartItems.find(p => p.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({
      productId,
      quantity,
      price: pDetails.price,
      name: pDetails.name,
      category: pDetails.category // Added for coupon validation convenience
    });
  }

  return "Product Added Successfully";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Product Removed Successfully";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Stock Not Available";
  }

  const item = cartItems.find(p => p.productId === productId);
  if (!item) return "Product Not Found in Cart";

  item.quantity = newQuantity;
  return "Quantity Updated Successfully";
}

export function getCartItems() {
  return cartItems;
}

export function getCartTotal() {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function clearCart() {
  cartItems = [];
  return "Cart Cleared Successfully";
}
