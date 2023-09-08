import { useState } from "react";
import { styled } from "styled-components";
import { postCsvFile, putProductsPrice } from "../services/priceUpdater";
import TableProducts from "../components/TableProducts";
import { IProduct } from "../shared/IProduct";
import { IoChevronBackCircleSharp } from "react-icons/io5";

export default function UpdateProductsPage() {
  const [file, setFile] = useState<File>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [containError, setContainError] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  function handleGoBack() {
    setProducts([]);
    setContainError(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const allProducts: IProduct[] = (await postCsvFile(formData)).data;
        setProducts(allProducts);
        setContainError(false);
      } catch (error: any) {
        if (error.response.status === 422) {
          setContainError(true);
          setProducts(error.response.data);
        } else {
          console.error(error);
        }
      }
    }
  };

  async function updateDataProducts() {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await putProductsPrice(formData);
        setProducts([]);
        setContainError(false);
        alert(response.data.message);
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  const buttonValidate =
    (!containError && products.length === 0) ||
    (containError && products.length > 0);

  return (
    <Main>
      {!containError && products.length > 0 && (
        <div onClick={handleGoBack}>
          <IoChevronBackCircleSharp fontSize={"22px"} />
          Voltar
        </div>
      )}

      <h1>Atualizar preço dos produtos</h1>

      {buttonValidate && (
        <>
          <p>
            Faça o upload do arquivo de precificação no formato CSV seguindo o
            modelo de tabela (coluna 1: product_code; coluna 2: new_price).
          </p>

          <form onSubmit={handleSubmit}>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button
              className={file ? "" : "disable"}
              disabled={file ? false : true}
              type="submit"
            >
              Validar
            </button>
          </form>
        </>
      )}

      {products.length > 0 && (
        <>
          <h2>Produtos a serem alterados:</h2>

          <TableProducts products={products} />

          <>
            <span>
              {containError
                ? "O arquivo não passou nas validações necessárias. Corrija a planilha, faça o upload e valide os dados novamente."
                : "Para confirmar as alterações clique no botão abaixo."}
            </span>

            <button
              onClick={updateDataProducts}
              className={containError ? "disable" : ""}
              disabled={containError}
            >
              Atualizar
            </button>
          </>
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  padding: 5%;
  padding-left: 400px;

  div {
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    font-size: 18px !important;
    color: var(--color-blue);
    font-size: 16px;
    font-weight: 600;
    justify-content: space-between;
    width: 80px;
  }

  div:hover {
    text-decoration: underline;
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

  button:hover {
    background-color: #4ac598;
  }

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: var(--color-gray0);
  }

  .disable {
    background-color: gray;
    color: var(--color-gray);
    cursor: not-allowed;
  }

  .disable:hover {
    background-color: gray;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }

    width: 90vw;
    padding: 20px;
  }
`;
