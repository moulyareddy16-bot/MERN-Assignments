const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(category) {
  const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  return filtered.length > 0 ? filtered : "Invalid Category";
}

export function searchProducts(query) {
  return products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
}

export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  return product ? product.stock >= quantity : false;
}

export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product Not Found";
  if (product.stock < quantity) return "Not Enough Stock";

  product.stock -= quantity;
  return "Stock Updated";
}