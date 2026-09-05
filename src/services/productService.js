import products from "../data/products";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts() {
  await delay(500);
  return products;
}

export async function getProductById(productId) {
  await delay(400);

  const product = products.find((item) => item.id === productId);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}