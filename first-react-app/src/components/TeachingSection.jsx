import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data.js";

export default function TeachingSection() {
  return (
    <section>
      <h3>Подход к обучению</h3>

      {ways.map((way, index) => (
        <WayToTeach key={index} {...way} />
      ))}
    </section>
  );
}
