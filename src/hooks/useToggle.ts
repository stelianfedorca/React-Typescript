import { useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  console.log('useToggle');

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};
