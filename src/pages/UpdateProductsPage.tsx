import { useState } from "react";
import TableProducts from "../components/UpdateProductsPage/TableProducts";
import { IProduct } from "../shared/IProduct";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import UpdateSection from "../components/UpdateProductsPage/UpdateSection";
import FormFileValidation from "../components/UpdateProductsPage/FormFileValidation";
import { styled } from "styled-components";

export default function UpdateProductsPage() {
  const [file, setFile] = useState<File>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [containError, setContainError] = useState<boolean>(false);

  const buttonGoBackVisible = !containError && products.length > 0;

  const formValidateVisible =
    (!containError && products.length === 0) ||
    (containError && products.length > 0);

  function handleGoBack() {
    setProducts([]);
    setContainError(false);
  }

  return (
    <Main>
      {buttonGoBackVisible && (
        <div onClick={handleGoBack}>
          <IoChevronBackCircleSharp fontSize={"22px"} />
          Voltar
        </div>
      )}

      <h1>Atualizar preço dos produtos</h1>

      {formValidateVisible && (
        <FormFileValidation
          file={file}
          setFile={setFile}
          setProducts={setProducts}
          containError={containError}
          setContainError={setContainError}
        />
      )}

      {products.length > 0 && (
        <>
          <TableProducts products={products} />

          <UpdateSection
            file={file}
            setProducts={setProducts}
            containError={containError}
            setContainError={setContainError}
          />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  padding: 5%;
  padding-left: 400px;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: var(--color-blue);
  }

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

  @media (max-width: 800px) {
    width: 90vw;
    padding: 20px;

    h1 {
      font-size: 22px;
    }
  }
`;
