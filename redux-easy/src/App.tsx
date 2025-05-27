import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  selectCounter,
  useAppSelector,
  type CounterId,
  type DecrementAction,
  type IncrementAction,
} from "./store";
import { useDispatch } from "react-redux";

export default function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter counterId="first" />
      <Counter counterId="second" />
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );

  return (
    <>
      counter {counterState?.counter}
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: { counterId },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: { counterId },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </>
  );
}
