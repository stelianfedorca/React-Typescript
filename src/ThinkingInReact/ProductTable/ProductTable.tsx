interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface ProductProps {
  products: Product[];
}

export function ProductTable({ products }: ProductProps) {
  return <div></div>;
}
