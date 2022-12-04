import React, { useMemo, useState } from 'react';

function factorialOf(n: number): number {
  console.log('factorialOf() is called...');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
export function CalculateFactorial() {
  const [number, setNumber] = useState<number>(1);
  const [increment, setIncrement] = useState<number>(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setIncrement((increment) => increment + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} /> is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
