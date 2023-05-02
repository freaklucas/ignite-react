import { useContext } from "react";
import { TransactionsContext } from "../../hooks/UseTransactions";
import { currencyBRL, dateTimeBR } from "../../utils/format";
import { Container } from "./styles";



export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Catergoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {currencyBRL(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{dateTimeBR(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
