import { styled } from "styled-components";
import { IProduct } from "../shared/IProduct";

export default function TableProducts({ products }: { products: IProduct[] }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço Atual</th>
          <th>Novo Preço</th>
          <th>Validação</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: IProduct, index: number) => (
          <tr key={index}>
            <td>{product.product_code}</td>
            <td>{product.name}</td>
            <td>
              {product.sales_price
                ? `R$${Number(product.sales_price).toFixed(2)}`
                : ""}
            </td>
            <td>
              {product.new_price
                ? `R$${Number(product.new_price).toFixed(2)}`
                : ""}
            </td>
            <td className={product.message_error ? "error" : "accept"}>
              {product.message_error ? product.message_error : "Aprovado"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  margin-bottom: 30px !important;
  min-width: 70vw;

  th {
    text-transform: uppercase;
    color: var(--color-gray1);
    font-weight: 500;
    text-align: start;
    padding-right: 50px;
    vertical-align: middle;
  }

  tr {
    height: 40px;
    align-items: center;
    padding: 30px !important;
  }

  td {
    vertical-align: middle;
    color: var(--color-blue);
    padding: 5px;
  }

  tbody tr:nth-child(odd) {
    background-color: var(--color-gray);
    border-top: 1px solid #dcd0d0;
    border-bottom: 1px solid #dcd0d0;
  }

  .error {
    color: #ef2a2a;
  }

  .accept {
    color: var(--color-green);
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
