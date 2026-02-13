import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 532px;
  margin: 0 auto 100px;
  font-family: "Barlow", sans-serif;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px; 
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #292929;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  color: #5F5F5F;
`;

const TotalRow = styled(Row)`
  color: #CE2829;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  /* Sadece alt köşeler kavisli, böylece kutuyla birleşir */
  border-radius: 0 0 6px 6px; 
  background-color: #FDC913;
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #292929;
  cursor: pointer;
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Hata almamak için değerlere varsayılan olarak 0 atıyoruz
const SummaryBox = ({ toppingsPrice = 0, total = 0, disabled}) => {
  return (
    <Wrapper>
      <Card>
        <Title>Sipariş Toplamı</Title>
        <Row>
          <span>Seçimler</span>
          {/* JavaScript'teki toppingsPrice değişkenini buraya yazdık */}
          <span>{Number(toppingsPrice).toFixed(2)}₺</span>
        </Row>
        <TotalRow>
          <span>Toplam</span>
          {/* JavaScript'teki total değişkenini buraya yazdık */}
          <span>{Number(total).toFixed(2)}₺</span>
        </TotalRow>
      </Card>
      <SubmitButton disabled={disabled} type="submit">
        SİPARİŞ VER
      </SubmitButton>
    </Wrapper>
  );
};

export default SummaryBox;
