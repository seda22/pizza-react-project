import styled from 'styled-components';

const NameSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px; /* Figma'daki etiket-input arası boşluk */
  width: 100%;
  max-width: 532px;
  
  margin: 40px auto; /* Sadece altındakiyle mesafe bırakır */
`;

const NameLabel = styled.label`
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #292929;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: #FAF7F2; /* Sipariş notuyla aynı renk */
  border: 1px solid #FAF7F2;
  border-radius: 8px;
  padding: 0 16px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;

    /* Placeholder ve Yazı Stili */
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #5F5F5F;
  background-color: #ffffff;

  &::placeholder {
    color: #AFADAD;
  }

  &:focus {
    outline: none;
    border-color: #FDC913;
    background-color: #ffffff;
  }
`;

export default function ClientName({ value, onChange }) {
  return (
    <NameSection>
      <NameLabel htmlFor="name">Müşteri Adı</NameLabel>
      <StyledInput
        id="name"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Adınızı giriniz"
      />
    </NameSection>
  );
}