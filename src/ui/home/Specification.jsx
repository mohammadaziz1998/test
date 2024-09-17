import styled from 'styled-components';
import Heading from '../Heading';

const StyledSpecification = styled.div``;

const StyledSpecificationImges = styled.div`
  justify-items: center;
`;

const StyledMainImg = styled.img``;

const StyledProductImages = styled.div``;

const StyledMainImgIcons = styled.span``;

const StyledProductFeatures = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-align: left;
  }
`;

const StyledSpecificationDetails = styled.div``;
function Specification() {
  return (
    <StyledSpecification>
      <StyledSpecificationImges>
        <StyledMainImg src="/product.svg" alt="product" />
        <StyledMainImgIcons>
          <img src="/icon-product.svg" alt="icon" />
          <img src="/icon2-product.svg" alt="icon" />
        </StyledMainImgIcons>
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
            <span>Free Shipping within USA</span>
          </div>
          <div>
            <img src="/icon2-features.svg" alt="icon" />
            <span>Free Shipping within USA</span>
          </div>
          <div>
            <img src="/icon3-features.svg" alt="icon" />
            <span>Free Shipping within USA</span>
          </div>
          <div>
            <img src="/icon4-features.svg" alt="icon" />
            <span>Free Shipping within USA</span>
          </div>
        </StyledProductFeatures>
      </StyledSpecificationImges>
      <StyledSpecificationDetails>
        <Heading>Firebee Headband</Heading>
      </StyledSpecificationDetails>
    </StyledSpecification>
  );
}

export default Specification;
