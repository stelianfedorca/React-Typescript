import { useRef, useState } from 'react';

export function StopWatch() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
}
