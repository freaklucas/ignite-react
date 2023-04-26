import styled from "styled-components";

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;

  button {
    background-color: #0e1d25;
  }
`;

export function App() {
  return (
    <div className="App">
      <Title className="title">
        Hello
        <button>Salvar</button>
      </Title>
    </div>
  );
}
