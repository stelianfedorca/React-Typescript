import React, { useEffect, useReducer } from 'react';
import './Counter.css';
const initialState = { count: 0 };

// Discriminated Unions
type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('Hello world');
  });

  return (
    <div className="Counter">
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>
        Substract
      </button>
    </div>
  );
}

export default Counter;
