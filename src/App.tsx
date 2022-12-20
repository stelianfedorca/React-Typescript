import './App.css';
import { Todos } from './Todos';
import { useCallback, useState } from 'react';
import { CalculateFactorial } from './CalculateFactorial';
import { useToggle } from './hooks';
import { Accordion } from './components';

// useCallback - returns a memoized callback function
// allows to isolate resource intensive functions so that they will not automatically run on every render
// this can improve performance

// useMemo - return a memoized value
// allows caching a value so that it does not need to be recalculated during re-renders

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  // const [isVisible, toggleVisible] = useToggle(false);

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, 'todo']);
  }, []);

  function increment() {
    setCount((count) => count + 1);
  }
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

export default App;
