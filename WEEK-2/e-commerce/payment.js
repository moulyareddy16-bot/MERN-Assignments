import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return {
      orderId: null,
      status: "failed",
      message: "Cart is empty"
    };
  }

  // 1. Handle Discounts
  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }

  // 2. Validate Payment Method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      orderId: null,
      status: "failed",
      message: "Invalid Payment Method (Valid: card, upi, cod)"
    };
  }

  // 3. Execute Order Logic
  // Reduce stock for all items
  items.forEach(item => {
    reduceStock(item.productId, item.quantity);
  });

  // Clear the cart after purchase
  clearCart();

  // 4. Return Order Summary
  return {
    orderId: 'ORD' + Date.now(),
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: total,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {
  const validMethods = ["card", "upi", "cod"];
  return validMethods.includes(method.toLowerCase());
}
