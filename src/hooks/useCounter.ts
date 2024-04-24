import { useEffect, useState } from 'react';

export function useCounter(delay: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, delay);

    return () => clearInterval(id);
  }, [count, delay]);

  return count;
}
