import { useState } from "react";
import { styled } from "styled-components";
import { postCsvFile } from "../services/priceUpdater";
import TableProducts from "../components/TableProducts";

export default function UpdateProductsPage() {
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        await postCsvFile(formData);
      } catch (error: any) {
        if (error.response.status === 422) {
          setProducts(error.response.data);
        } else {
          console.error(error);
        }
      }
    } else {
      console.error("Nenhum arquivo selecionado.");
    }
  };

  return (
    <Main>
      <h1>Atualizar preço dos produtos</h1>
      <p>
        Faça o upload do arquivo de precificação no formato CSV seguindo o
        modelo de tabela (coluna 1: product_code; coluna 2: new_price).
      </p>

      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Verificar planilha</button>
      </form>

      {products?.length > 0 && (
        <>
          <h2>Produtos a serem alterados:</h2>{" "}
          <TableProducts products={products} />
          {/* <span>Para confirmar as alterações clique no botão abaixo.</span>
      <button>VALIDAR</button> */}
          <span>
            O arquivo não passou nas validações necessárias. Corrija a planilha
            e faça o upload novamente.
          </span>
          <div>
            <button
              style={{
                backgroundColor: "var(--color-gray0)",
                color: "var(--color-gray)",
                cursor: "not-allowed",
              }}
            >
              VALIDAR
            </button>
          </div>
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  padding: 5%;

  div {
    display: flex;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--color-blue);
  }

  h2 {
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 20px;
    color: var(--color-blue);
    font-weight: 600;
    position: relative;
    margin-left: 25px;
  }

  h2:before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    left: -25px;
    background-color: var(--color-green);
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--color-gray1);
    font-weight: 400;
  }

  input[type="file"] {
    opacity: 1;
    left: 0;
    right: 0;
    height: 100%;
    margin-bottom: 10px;
    cursor: pointer !important;
  }

  button {
    background-color: var(--color-green);
    border: none;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    position: relative;
    padding: 12px;
    cursor: pointer;
    font-weight: 600;
    color: var(--color-blue);
    display: block;
    margin-bottom: 40px;
    min-width: 200px;
  }

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: var(--color-gray0);
  }
`;
