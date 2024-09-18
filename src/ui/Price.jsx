import styled from 'styled-components';
import Heading from './Heading';

const StyledPrice = styled.span`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  text-align: left;
  display: flex;
  gap: 1rem;
`;
const StyledDiscountPrice = styled.span`
  /* background-color: aqua; */
  position: relative;

  img {
    position: absolute;
    left: -10px;
    top: 5px;
  }
`;
function Price({ children, discount }) {
  return (
    <StyledPrice>
      {discount && (
        <StyledDiscountPrice>
          <span>{discount}</span>
          <img src="/discount.svg" alt="discount" />
        </StyledDiscountPrice>
      )}
      <span>{children}</span>
    </StyledPrice>
  );
}

export default Price;
