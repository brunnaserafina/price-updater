import { IProduct } from "../../shared/IProduct";
import { postCsvFile } from "../../services/priceUpdater";
import { styled } from "styled-components";
import { Button } from "../../common/Button";

interface FormFileValidationProps {
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setContainError: React.Dispatch<React.SetStateAction<boolean>>;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  file: File | undefined;
  containError: boolean;
}

export default function FormFileValidation({
  setProducts,
  containError,
  setContainError,
  setFile,
  file,
}: FormFileValidationProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  async function handleFileSubmitValidation(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
  }

  return (
    <Form onSubmit={handleFileSubmitValidation}>
      <label>
        Faça o upload do arquivo de precificação no formato CSV seguindo o
        modelo de tabela (coluna 1: product_code; coluna 2: new_price).
      </label>

      <input type="file" accept=".csv" onChange={handleFileChange} />

      <Button
        className={file ? "" : "disable"}
        disabled={file ? false : true}
        type="submit"
      >
        Validar
      </Button>
    </Form>
  );
}

const Form = styled.form`
  label {
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--color-gray1);
    font-weight: 400;
    display: block;
  }

  input[type="file"] {
    opacity: 1;
    left: 0;
    right: 0;
    height: 100%;
    margin-bottom: 10px;
    cursor: pointer !important;
  }


  @media (max-width: 800px) {
    label {
      font-size: 14px;
    }
  }
`;
