import {
  useRef,
  useState,
  type PropsWithChildren,
  type MouseEvent,
} from "react";
import "./App.css";

interface Props extends PropsWithChildren {
  name: string;
}

export default function App({ name, children }: Props) {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("log");
  };

  return (
    <>
      <h1>{name}</h1>
      <input id="input" ref={inputRef} />
      <button onClick={onClick}>Click (Count: {count})</button>
      {children}
    </>
  );
}