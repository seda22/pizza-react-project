import styled from "styled-components";

const DoughWrapper = styled.section`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: #F3F3F3;
  color: #5f5f5f;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export default function SelectDoughType({ value, onChange }) {
  return (
    <DoughWrapper>
      <Title>Hamur Seç *</Title>
      <StyledSelect name="dough" value={value} onChange={onChange}>
        <option value="" disabled>Hamur Kalınlığı Seç</option>
        <option value="ince">İnce</option>
        <option value="orta">Orta</option>
        <option value="kalin">Kalın</option>
      </StyledSelect>
    </DoughWrapper>
  );
}