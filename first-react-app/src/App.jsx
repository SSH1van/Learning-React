import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from 'react'
import { ways, differences } from "./data.js";

export default function App() {
  const [contentType, setContentType] = useState('way');

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Подход к обучению</h3>

          <WayToTeach {...ways[0]}/>
          <WayToTeach {...ways[1]} />
          <WayToTeach {...ways[2]} />
          <WayToTeach {...ways[3]} />
        </section>

        <section>
          <h3>Чем мы отличаемся от других?</h3>

          <Button onClick={() => { handleClick("way")}}>Подход</Button>
          <Button onClick={() => { handleClick("easy")}}>Доступность</Button>
          <Button onClick={() => { handleClick("program")}}>Концентрация</Button>

          <p>{differences[contentType]}</p>
        </section>
      </main>
    </div>
  );
}
