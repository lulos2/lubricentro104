export interface Product {
  id?: number;
  image?: string;
  type: string;
  code: string;
  brand: string;
  name: string;
  stock: number;
  purchasePrice: number;
  salePrice: number;
  profit: number;
  quantity: number;
}