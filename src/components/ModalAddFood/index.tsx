import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { FormHandles } from "@unform/core";

type DataObject = {
  image: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
};

type ModalAddFood = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: DataObject) => void;
};

export function ModalAddFood({
  isOpen,
  handleAddFood,
  setIsOpen,
}: ModalAddFood) {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: DataObject) {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
