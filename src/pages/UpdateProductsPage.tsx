import { styled } from "styled-components";

export default function UpdateProductsPage() {
  return (
    <Main>
      <h1>Atualizar preço dos produtos</h1>
      <p>
        Faça o upload do arquivo de precificação no formato CSV seguindo o
        modelo de tabela (coluna 1: product_code; coluna 2: new_price).
      </p>
      <label>
        <span>Importe a planilha em csv</span>
        <input type="file" />
      </label>
    </Main>
  );
}

const Main = styled.main`
  padding: 5%;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--color-blue);
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--color-gray1);
    font-weight: 400;
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    cursor: pointer !important;
  }

  label {
    background-color: var(--color-green);
    border: none;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    position: relative;
    padding: 12px;
    cursor: pointer !important;
    font-weight: 600;
    color: var(--color-blue);
    display: inline-block;
  }

  label:hover {
    cursor: pointer !important;
  }
`;
