import styled from "styled-components";

const CounterContainer = styled.section`
  display: flex;
  width: 150px;
  height: 56px;

  button {
    flex: 1;
    background: #FDC913;
    border: none;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    &:first-child { border-radius: 6px 0 0 6px; }
    &:last-child { border-radius: 0 6px 6px 0; }
  }

  span {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAF7F2;
    border: 1px solid #ffffff;
    font-family: 'Barlow', sans-serif;
  }
`;

export default function OrderCount() {
  return (
    <CounterContainer>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </CounterContainer>
  );
}
