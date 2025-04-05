import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  function toggleError() {
    setHasError((prev) => !prev);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>toggleError</Button>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          className="control"
          id="name"
          type="text"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={(event) => {
            setName(event.target.value);
            setHasError(event.target.value.length === 0);
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
