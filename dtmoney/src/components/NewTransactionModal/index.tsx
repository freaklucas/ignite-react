import Modal from "react-modal";

interface NewTramsactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTramsactionModalProps) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h2>Cadastrar transação</h2>
  </Modal>
  );
}