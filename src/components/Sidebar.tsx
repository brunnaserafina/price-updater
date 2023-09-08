import { styled } from "styled-components";
const logoShopper = require("../assets/images/logo-shopper.png");

export default function Sidebar() {
  return (
    <Aside>
      <div>
        <img src={logoShopper} alt="Logo sidebar" />
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  width: 300px;
  height: 100vh;
  background-color: var(--color-blue);
  position: fixed;
  padding: 30px 15px;
  box-sizing: border-box;

  div {
    text-align: center;
  }

  img {
    cursor: pointer;
  }
`;
