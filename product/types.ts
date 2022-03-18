export interface ProductType {
  name: string;
  description?: string;
  price: number;
  image: string;
}

export interface CheckoutElementType {
  product: ProductType;
  cant: number;
}
