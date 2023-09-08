import { styled } from "styled-components";

export default function TableProducts({ products }: { products: any[] }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço Atual</th>
          <th>Novo Preço</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: any, index: any) => (
          <tr key={index}>
            <td>{product.product_code}</td>
            <td>{product.name}</td>
            <td>{product.sales_price}</td>
            <td>{product.new_price}</td>
            <td
              style={{
                color: product.message_error ? "#EF2A2A" : "var(--color-green)",
                fontSize: "15px",
              }}
            >
              {product.message_error ? product.message_error : "Aprovado!"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  margin-bottom: 30px;

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
`;
