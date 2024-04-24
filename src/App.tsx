import { exec } from 'child_process';
import React, {
  createContext,
  forwardRef,
  LegacyRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import Button from './AddingInteractivity/Button';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { StopWatch } from './components/StopWatch';
import { useCounter } from './hooks/useCounter';

// useCallback - returns a memoized callback function
// allows to isolate resource intensive functions so that they will not automatically run on every render
// this can improve performance

// useMemo - return a memoized value
// allows caching a value so that it does not need to be recalculated during re-renders

type AppProps = {
  messages?: string;
  count?: number;
  disabled?: boolean;

  names?: string[];
  status: 'waiting' | 'success';

  // function type syntax that takes an event
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // when passing down the state setter to child component
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export declare interface AppPropsInterface {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // a single React element
}

type User = {
  name: string;
  age: number;
};

// type aliases
type Point = {
  x: number;
  y: number;
};

type ID = number | string;

// useEffect vs useLayoutEffect
// -> both are used for performing side effects

/* useEffect
 -> this runs asynchronously
  -> when you don't need to mutate the DOM
*/

/* useLayoutEffect
-> this runs synchronously immediately after React has performed all DOM mutations
-> when you need to mutate the DOM/ when you need to perform measurements (getting the scroll position)
*/

/* useImperativeHandle
-> 
*/

const MyComponent = () => {
  // It was used an union type
  const [user, setUser] = useState<User | null>(null);

  //useRef
  const ref = useRef(0);

  //ref.current is mutable (you can read and write to it)

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times');
  }

  // useCallback
  const memoizedCallback = useCallback((param1: string, param2: number) => {
    console.log(param1, param2);
    return { ok: true };
  }, []);

  return <button onClick={handleClick}>Click to increment</button>;
};

// build a stopwatch
const StopWatchComponent = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timer>();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

type MyInputProps = {
  ref?: LegacyRef<HTMLInputElement>;
};
const MyInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

// focus text input using ref
export function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

interface UserContextInferface {
  name: string;
  age: number;
}
const UserContext = createContext<UserContextInferface | null>(null);

type MyModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
};
function MyModal({ message, isOpen, onClose }: MyModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <h2 className="white-text">{message}</h2>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
}

// closure

// code blocks

// promise

// let promise = new Promise(function (resolve, reject) {
//   // here is the code that should produce the result
//   setTimeout(() => resolve('done'), 5000);
// });

// async function myAsyncFunction() {
//   const a = 10;
//   console.log('a: ', a);
//   const res = await promise;
//   console.log('res: ', res);
//   const b = 22;
//   console.log('b: ', b);
// }

// function myMainFunction() {
//   myAsyncFunction();
//   console.log('hello world');
// }
// myMainFunction();

// in js, a scope is created by a function or code block

function outerFunc() {
  // the outer scope
  let outerVar = 'I am outside';

  function innerFunc() {
    // the inner scope
    console.log(outerVar); // logs => 'I am outside'
  }

  innerFunc();
}

outerFunc();

// scope can be nested
// the variables of the outer scope are accessible inside the inner scope

// lexical scope = static scoping

// const myGlobal = 0;

// function func() {
//   const myVar = 1;
//   console.log(myGlobal); // logs 0

//   function innerOfFunc() {
//     const myInnerVar = 2;
//     console.log(myVar, myGlobal); // "1 0"

//     function innerOfInnerOfFunc() {
//       console.log(myInnerVar, myVar, myGlobal); // "2 1 0"
//     }

//     innerOfInnerOfFunc();
//   }

//   innerOfFunc();
// }

// func();

// closure
// Simpler, the closure is a function that remembers the variables from the place where it is defined,
// regardless of where it is executed later.

// examples of closures

// const message = 'Hello, World!';

// setTimeout(function callback() {
//   console.log(message); // logs "Hello, World!"
// }, 1000);

// // the callback is a closure because it captures the variable 'message'

function multiply(a: number) {
  return function executeMultiply(b: number) {
    return a * b;
  };
}

const double = multiply(2);
console.log('double: ', double);
double(3); // 6
// double(5); // 10

let greeting = function (a: string) {
  return function (b: string) {
    return a + ' ' + b;
  };
};

let hello = greeting('hello');
let morning = greeting('good morning');

// console.log(hello);

// hello('Austin'); // "hello Austin";
// hello('Roy'); // "hello Roy";

// morning('Austin'); // "good morning Austin"

// function returning a function

// function func() {
//   return function (str: string) {
//     return str;
//   };
// }

// let result = func(); // there will be a function in the variable result
// console.log(result('dsa')); // "f() {...}"

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="text"></input>
    </div>
    // <UserContext.Provider value={userName}>
    //   <Layout>Main Content</Layout>
    //   <Button title="Change context" onClick={handleChangeContext} />
    //   <MyComponent />
    // </UserContext.Provider>
  );
}

export { App, UserContext };
