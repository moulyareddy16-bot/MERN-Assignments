import { getProductById } from './product.js';

// Available coupons config
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];

  // 1. Check if coupon exists
  if (!coupon) {
    return { valid: false, message: "Invalid Coupon Code" };
  }

  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum Cart Amount Should Be ${coupon.minAmount}`
    };
  }

  // 3. Check category requirement
  if (coupon.category) {
    const hasCategoryProduct = cartItems.some(item => {
      const product = getProductById(item.productId);
      return product && product.category === coupon.category;
    });

    if (!hasCategoryProduct) {
      return {
        valid: false,
        message: `Coupon valid only for ${coupon.category} products`
      };
    }
  }

  return { valid: true, message: "Coupon Applied Successfully" };
}

export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  if (!coupon) return 0;

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  } else if (coupon.type === "flat") {
    return coupon.value;
  }
  return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (validation.valid) {
    const discountAmount = calculateDiscount(couponCode, cartTotal);
    return {
      originalTotal: cartTotal,
      discount: discountAmount,
      finalTotal: cartTotal - discountAmount,
      message: validation.message
    };
  }

  return {
    originalTotal: cartTotal,
    discount: 0,
    finalTotal: cartTotal,
    message: validation.message
  };
}
