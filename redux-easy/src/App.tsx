import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { type DecrementAction, type IncrementAction, store } from "./store";
import { useEffect, useReducer } from "react";

export default function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return unsubscribe;
  }, []);

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
      <div className="card">
        counter {store.getState().counter}
        <button
          onClick={() =>
            store.dispatch({ type: "increment" } satisfies IncrementAction)
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            store.dispatch({ type: "decrement" } satisfies DecrementAction)
          }
        >
          decrement
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
