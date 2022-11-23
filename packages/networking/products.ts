export interface Product {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly category: string;
  readonly image: string;
}

const endpoint = "https://fakestoreapi.com";

export async function products(): Promise<Array<Product>> {
  const raw = await fetch(`${endpoint}/products`);
  return await raw.json();
}

export async function product(id: string): Promise<Product> {
  const raw = await fetch(`${endpoint}/products/${id}`);
  return await raw.json();
}
