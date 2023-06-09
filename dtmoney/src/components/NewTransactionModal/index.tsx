import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { FormEvent, useState, useContext } from "react";
import { useTransactions } from "../../hooks/UseTransactions";

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewtransactionModalProps) {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [category, setCategory] = useState('');

const [type, setType] = useState('deposit');

const { createTransaction } = useTransactions();

async function handleCreateNewTransaction(e: FormEvent) {
  e.preventDefault();

  await createTransaction({
    title,
    amount,
    category,
    type,
  })

  setTitle('');
  setAmount(0);
  setCategory('');
  setType('deposit');

  onRequestClose();
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
        <img src={close} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="number" placeholder="Valor" value={amount} onChange={e => setAmount(Number(e.target.value))}/>
        <TransactionTypeContainer>
            <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
                <img src={income} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>
            <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
                <img src={outcome} alt="Saída" />
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
