import styled from 'styled-components';

const NoteSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 532px; /* Figma genişliği */
  margin: 30px auto; /* Yukarıdan 30px ve yatayda ortalama */
`;

const NoteLabel = styled.label`
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.76px;
  color: #292929;
`;

const NoteInput = styled.input`
  width: 100%;
  height: 56px; /* Figma'daki yükseklik */
  background: #FAF7F2; /* Figma'daki arka plan rengi */
  border: 1px solid #FAF7F2; 
  border-radius: 6px;
  padding: 0 16px;
  background-color: #FAF7F2; /* Figma'daki tam renk kodu */
  border: 1px solid #FAF7F2;
  
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
    background: #ffffff; /* Odaklandığında beyaz olması şık durur */
  }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #bbbbbb;
  margin: 30px 0;
  width: 100%;
`;

export default function OrderNote({ value, onChange }) {
  return (
    <NoteSection>
      <NoteLabel htmlFor="note">Sipariş Notu</NoteLabel>
      <NoteInput
        id="note"
        name="note"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
      <Divider />
    </NoteSection>
  );
}