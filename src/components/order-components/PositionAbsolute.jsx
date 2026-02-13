import styled from "styled-components";

const WrapperDiv = styled.div`
display:flex;
flex-direction:column;
gap:20px;
max-width:532px;
min-width:532px;
margin:0 auto;

`;

const ButtonHome = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: medium;
  &:hover {
    background-color: #f38383;
    border-radius: 10px;
    text-decoration: underline;
  }
`;
const HeaderImg = styled.img`
padding-right: 10px;
`;
const DivNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivSpan = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 55px;
`;

const Span = styled.span`
  font-size: 28px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
`;
const ProductInfo = styled.section`
  display:flex;
  flex-direction:column;
  gap:16px;
`;

const Title = styled.h1`
font-size: 22px;
font-family: 'Barlow', sans-serif;
font-weight: medium;
`;

const Info = styled.p`
font-size: 16px;
font-family: 'Barlow', sans-serif;
line-height: 30px;
`;

export default function PositionAbsolute() {
  return (
    <WrapperDiv className="wrapper">
      <HeaderImg src="public/assets/iteration-2/pictures/form-banner.png" alt="" />
           <nav className="main-page-order-page">
             <ButtonHome className="page-btn" onClick={() => setActivePage("home")}>
               Anasayfa
             </ButtonHome>
             <span className="page-seperator"> - </span>
             <span className="page-active" style={{color:"red",fontWeight:"bold"}}>Sipariş Oluştur</span>
           </nav>

      <ProductInfo className="product-info">
        <Title className="product-title">
          Position Absolute Acı Pizza
        </Title>

        <DivNav className="price-row">
          <Span>85.50₺</Span>
          <DivSpan>
            <span>4.9</span>
            <span>(200)</span>
          </DivSpan>
        </DivNav>

        <Info className="product-desc">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza
          tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.
        </Info>
      </ProductInfo>
    </WrapperDiv>
  );
}
