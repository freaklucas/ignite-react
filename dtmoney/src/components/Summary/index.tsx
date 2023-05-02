import { Container } from "./styles";
import input from "../../assets/input.svg";
import output from "../../assets/output.svg";
import money from "../../assets/money.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";


export function Summary() {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={input} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={output} alt="Saídas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={money} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
