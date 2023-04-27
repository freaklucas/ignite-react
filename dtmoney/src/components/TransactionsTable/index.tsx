import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="widthdraw">-R$ 10.000</td>
            <td>Desenvolvimento</td>
            <td>26/04/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="deposit">R$ 1.200</td>
            <td>Casa</td>
            <td>16/04/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
