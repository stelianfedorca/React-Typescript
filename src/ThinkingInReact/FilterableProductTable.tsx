import ProductTable from './ProductTable';
import { SearchBar } from './SearchBar';

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface ProductProps {
  products: Product[];
}
export default function FilterableProductTable({ products }: ProductProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
