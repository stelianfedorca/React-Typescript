import { useState } from 'react';
import './App.css';
import { FilterableProductTable } from './ThinkingInReact/FilterableProductTable';
import { Profile } from './DescribingTheUI/Gallery';
import Gallery from './DescribingTheUI/Gallery';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
function App() {
  const name = 'Steli';

  return (
    <div className="App">
      <h1>Hello {name}, good to see you!</h1>
      {/* <FilterableProductTable products={PRODUCTS} /> */}
    </div>
  );
}

export default App;
