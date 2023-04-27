import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import incomeImg from "../../assets/input.svg";
import closeImg from "../../assets/output.svg";
import close from '../../assets/exit.svg'; 

interface NewTramsactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTramsactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img 
          src={close}  
          alt="Fechar modal" 
        />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
        />
        <input 
          placeholder="Valor" 
          type="number" 
        />
        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={closeImg} alt="Saida" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria" 
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
