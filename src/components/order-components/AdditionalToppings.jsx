import styled from "styled-components";

// Tüm bölümü kapsayan ana kutu
const ToppingsContainer = styled.section`
  width: 100%;
  max-width: 532px; /* Figma genişliği */
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h3`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #5f5f5f;
  font-size: 14px;
  margin-bottom: 20px;
`;

// 3 Kolonlu Grid Yapısı
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 eşit kolon */
  gap: 15px 10px; /* Satır ve sütun arası boşluk */
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #5f5f5f;
  cursor: pointer;

  input {
    width: 40px;
    height: 40px;
    background-color: #FAF7F2;
    border: 1px solid #E2E2E2;
    border-radius: 4px;
    cursor: pointer;
    accent-color: #FDC913; /* Tik rengini sarı yapar */
  }
`;

export default function AdditionalToppings({ list, selected, onChange }) {
  return (
    <ToppingsContainer>
      <Title>Ek Malzemeler</Title>
      <Subtitle>En Fazla 10 malzeme seçebilirsiniz. 5₺</Subtitle>
      
      <Grid>
        {list.map((item) => (
          <CheckboxLabel key={item.id}>
            <input
              type="checkbox"
              name={item.name}
              checked={selected.includes(item.name)}
              onChange={onChange}
            />
            {item.name}
          </CheckboxLabel>
        ))}
      </Grid>
    </ToppingsContainer>
  );
}