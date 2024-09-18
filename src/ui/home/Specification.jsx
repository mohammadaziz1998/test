import styled from 'styled-components';
import Heading from '../Heading';
import StarterKit from '../StarterKit';
import FounderKit from '../FounderKit';
import Button from '../Button';

const StyledSpecification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-white-secondary);
  padding: 2rem;
  flex-wrap: wrap;
`;

const StyledSpecificationImges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cemter;
  justify-items: center;
  position: relative;
  gap: 1rem;
`;

const StyledMainImg = styled.img`
  align-self: center;
  width: clamp(428px, 50vw, 628px);
  height: 392px;
`;

const StyledProductImages = styled.div`
  display: flex;
  align-self: center;
  gap: 0.6rem;
  img {
    width: clamp(60px, 10vw, 100px);
    height: clamp(60px, 10vw, 100px);
  }
`;

const StyledMainImgIcons = styled.span`
  display: flex;
  margin-bottom: -40px;
  gap: 1rem;
`;

const StyledProductFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    span {
      width: 200px;
    }
  }
  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;

      flex-direction: column;
      width: 163px;
      height: 117px;
    }
  }
`;

const StyledSpecificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  gap: 1rem;
`;

const StyledSpecificationPayment = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSpecificationHead = styled.div`
  align-self: flex-start;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
function Specification() {
  return (
    <StyledSpecification>
      <StyledSpecificationImges>
        <StyledMainImgIcons>
          <img src="/icon-product.svg" alt="icon" />
          <img src="/icon2-product.svg" alt="icon" />
        </StyledMainImgIcons>
        <StyledMainImg src="/product.svg" alt="product" />
        <StyledProductImages>
          <img src="/product1M.svg" alt="product" />
          <img src="/product2M.svg" alt="product" />
          <img src="/product3M.svg" alt="product" />
          <img src="/product4M.svg" alt="product" />
          <img src="/product5M.svg" alt="product" />
        </StyledProductImages>

        <StyledProductFeatures>
          <div>
            <img src="/icon-features.svg" alt="icon" />
            <Heading>Free Shipping within USA</Heading>
          </div>
          <div>
            <img src="/icon2-features.svg" alt="icon" />
            <Heading>Free Shipping within USA</Heading>
          </div>
          <div>
            <img src="/icon3-features.svg" alt="icon" />
            <Heading>Signal Catalogue Updates Included</Heading>
          </div>
          <div>
            <img src="/icon4-features.svg" alt="icon" />
            <Heading>Customer Support via E-mail, Phone, and Chat</Heading>
          </div>
        </StyledProductFeatures>
      </StyledSpecificationImges>
      <StyledSpecificationDetails>
        <StyledSpecificationHead>
          <Heading size="headBold">Firebee Headband</Heading>

          <div>
            <img src="/reviewStar.svg" alt="star" />
            <Heading>267 Reviews</Heading>
          </div>
          <Heading>
            Order today and receive your Firebee by June 15th, 2021
          </Heading>
        </StyledSpecificationHead>
        <StarterKit />
        <FounderKit />
        <Button size="veryLarge">
          Add to Cart <img src="/arrow.svg" alt="arrow" />
        </Button>
        <StyledSpecificationPayment>
          <img src="/masterCard.svg" alt="pay" />
          <img src="/maestro.svg" alt="pay" />
          <img src="/paypal.svg" alt="pay" />
          <img src="/affirm.svg" alt="pay" />
          <img src="/americanExpress.svg" alt="pay" />
        </StyledSpecificationPayment>
      </StyledSpecificationDetails>
    </StyledSpecification>
  );
}

export default Specification;
