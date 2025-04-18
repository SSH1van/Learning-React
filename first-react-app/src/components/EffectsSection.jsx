import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import useInput from "../hooks/useInput.js";

export default function EffectSection() {
  const input = useInput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Эффекты</h3>
      <Button
        style={{ marginBottom: "1rem" }}
        onClick={() => setIsModalOpen(true)}
      >
        Открыть информацию
      </Button>
      <Modal open={isModalOpen}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          quae dicta magnam labore non dolor laudantium eum error? Delectus aut
          esse perferendis. Doloremque soluta enim, ipsa quo ab dolorem
          deserunt!
        </p>
        <Button onClick={() => setIsModalOpen(false)}>Close modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
