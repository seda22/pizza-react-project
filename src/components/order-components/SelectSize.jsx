import styled from "styled-components";

const SizeWrapper = styled.section`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
`;

const SizeRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SizePill = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? '#FDC913' : '#F3F3F3'};
  color: #292929;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Barlow', sans-serif;
  transition: background 0.2s;

  &:hover {
    background-color: #FDC913;
  }
`;

export default function SelectSize({ value, onChange }) {
  const sizes = [
    { label: 'S', value: 'Kucuk' },
    { label: 'M', value: 'Orta' },
    { label: 'L', value: 'Buyuk' }
  ];

  return (
    <SizeWrapper>
      <Title>Boyut Seç *</Title>
      <SizeRow>
        {sizes.map((s) => (
          <SizePill
            key={s.value}
            type="button"
            $active={value === s.value}
            onClick={() => onChange({ target: { name: "size", value: s.value } })}
          >
            {s.label}
          </SizePill>
        ))}
      </SizeRow>
    </SizeWrapper>
  );
}