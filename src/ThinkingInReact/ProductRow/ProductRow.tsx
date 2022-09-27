interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface ProductRowProps {
  product: Product;
}
export function ProductRow({ product }: ProductRowProps) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
