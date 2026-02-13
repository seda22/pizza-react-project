import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  max-height: 1080px;
  background: #CE2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 20px;
  

  color: white;
  text-align: center;
  overflow: hidden;
`;

const Brand = styled.p`
  font-family: 'Londrina Solid', sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding: 0px auto 20px;
`;

const Tagline = styled.div`
  font-family: 'Satisfy', cursive;
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
  color: #FDC913; /* figmadaki sarı */
  margin-top: 16px;
`;

const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  margin: 8px 0 20px;
`;
const ProductTitle = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 29.44px;
  text-align: center;
  color: #FFFFFF;
  margin: 0 0 8px;
`;


const InfoBlock = styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  opacity: 0.95;
  padding-bottom:40px;
`;


const Divider = styled.div`
  width: 320px;
  height: 1px;
  background: rgba(255,255,255,0.5);
  margin: 10px auto;
`;

const SummaryBox = styled.div`
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 8px;
  padding: 20px 20px;
  width: 320px;
  text-align: left;
  font-family: 'Barlow', sans-serif;
`;

const SummaryTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 15px;
`;
const MetaRow = styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 22px;
`;

const Label = styled.span`
  font-weight: 600;
`;


export default function SuccessPage({ orderData }) {

  if (!orderData) return null;

  return (
    <Wrap>

      <Brand>Teknolojik Yemekler</Brand>
      <Tagline>lezzetin yolda</Tagline>
      <Title>
        SİPARİŞ ALINDI
      </Title>
      <Divider />

      <ProductTitle>
        Position Absolute Acı Pizza
      </ProductTitle>

      <InfoBlock>

        <MetaRow>
          <Label>Boyut:</Label> {orderData.size}
        </MetaRow>

        <MetaRow>
          <Label>Hamur:</Label> {orderData.dough}
        </MetaRow>

        <MetaRow>
          <Label>Ek Malzemeler:</Label> {orderData.toppings?.join(", ") || "Yok"}
        </MetaRow>

      </InfoBlock>



      <SummaryBox>
        <SummaryTitle>Sipariş Toplamı</SummaryTitle>

        <Row>
          <span>Seçimler</span>
          <span>{orderData.toppingsPrice}₺</span>
        </Row>

        <Row>
          <strong>Toplam</strong>
          <strong>{orderData.total}₺</strong>
        </Row>
      </SummaryBox>

    </Wrap>
  );
}
