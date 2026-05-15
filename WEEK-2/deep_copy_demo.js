/**
 * Deep Copy Demo
 * Objective: Demonstrate object isolation using deep copies (structuredClone).
 */

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 1. Create a deep copy using structuredClone (native in Node.js 17+)
let copyOrder = structuredClone(order);

// 2. Modify properties in the copied object
copyOrder.customer.address.city = 'Chennai';
copyOrder.items[0].price = 25000;

// 3. Verify original object remains unchanged (true isolation)
console.log("--- Original Order (City: Hyderabad, Price: 70000) ---");
console.log(JSON.stringify(order, null, 2));

console.log("\n--- Copied Order (City: Chennai, Price: 25000) ---");
console.log(JSON.stringify(copyOrder, null, 2));