import { useState } from "react";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";

export default function EffectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <section>
      <h3>Эффекты</h3>
      <Button style={{width: "250px"}} onClick={openModal}>Открыть информацию</Button>
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
      
    </section>
  );
}
