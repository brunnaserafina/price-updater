import { styled } from "styled-components";
import { putProductsPrice } from "../../services/priceUpdater";
import { IProduct } from "../../shared/IProduct";
import { Button } from "../../common/Button";

interface ConfirmationSectionProps {
  containError: boolean;
  file: File | undefined;
  setContainError: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export default function UpdateSection({
  containError,
  file,
  setProducts,
  setContainError,
}: ConfirmationSectionProps) {
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
  return (
    <Section>
      <span>
        {containError
          ? "O arquivo não passou nas validações necessárias. Corrija a planilha, faça o upload e valide os dados novamente."
          : "Para confirmar as alterações clique no botão abaixo."}
      </span>

      <Button
        onClick={updateDataProducts}
        className={containError ? "disable" : ""}
        disabled={containError}
      >
        Atualizar
      </Button>
    </Section>
  );
}

const Section = styled.section`
  span {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: var(--color-gray0);
  }
`;
