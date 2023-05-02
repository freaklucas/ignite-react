import { FormEvent, useContext, useState } from "react";

import { TransactionsContext } from "../../TransactionsContext";
import Modal from "react-modal";
import incomeImg from "../../assets/input.svg";
import closeImg from "../../assets/output.svg";
import close from '../../assets/exit.svg'; 

import { Container, TransactionTypeContainer, RadioBox } 
  from "./styles";
interface NewTramsactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTramsactionModalProps) {

  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    createTransaction({
      title,
      amount,
      category,
      type,
    });
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value) }
        />
        <input 
          placeholder="Valor" 
          onChange={event => setAmount(Number(event.target.value)) }
          value={amount}
          type="number" 
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }}
            activeColor="red"
          >
            <img src={closeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value) }
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
