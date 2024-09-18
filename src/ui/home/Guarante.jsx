import styled from 'styled-components';
import Heading from '../Heading';

const StyledGuarante = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--color-white-third);
  margin: 2rem;
`;

const StyledGuaranteText = styled.div`
  max-width: 878px;
  margin-inline: 10px;
  display: flex;
  flex-direction: column;
  text-align: start;
  @media (max-width: 650px) {
    max-width: 480px;
    text-align: center;
    margin-inline: auto;
  }
`;

function Guarante() {
  return (
    <StyledGuarante>
      <img src="/guarante.svg" alt="money-back" />
      <StyledGuaranteText>
        <Heading size="headParagraph">30 Day Money Back Guarantee</Heading>
        <Heading size="paragraph">
          At Firebee we believe in building quality products that actually work.
          Firebee and its partners have invested over $85 million in research
          and development to create the highest quality wearable for customers
          to enjoy. If for any reason if you are not satisfied with your Firebee
          headband we will happily refund your purchase.{' '}
        </Heading>
      </StyledGuaranteText>
    </StyledGuarante>
  );
}

export default Guarante;
