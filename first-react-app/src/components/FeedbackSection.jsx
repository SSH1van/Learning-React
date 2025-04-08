import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.length === 0,
    }));
  }

  function toggleError() {
    setForm((prev) => ({
      ...prev,
      hasError: !prev.hasError,
    }));
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
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={(event) => handleNameChange(event)}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
