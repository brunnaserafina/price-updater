import { styled } from "styled-components";

export const Button = styled.button`
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

  &:hover {
    background-color: #4ac598;
  }

  &.disable {
    background-color: gray;
    color: var(--color-gray);
    cursor: not-allowed;
  }

  &.disable:hover {
    background-color: gray;
  }
`;
