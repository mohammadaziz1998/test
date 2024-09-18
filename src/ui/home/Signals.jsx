import styled from 'styled-components';
import Heading from '../Heading';
import Situation from '../Situation';

const StyledSignals = styled.div`
  text-align: center;
  max-width: 1350px;
  position: relative;
  margin-inline: auto;
`;
const StyledSituations = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 2rem;
  @media (max-width: 1342px) {
    justify-content: center;
  }
`;

const StyledSignalsImg1 = styled.img`
  position: absolute;
  left: 0;
  top: -40px;
  z-index: -1;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const StyledSignalsImg2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  @media (max-width: 1024px) {
    display: none;
  }
`;
function Signals() {
  return (
    <StyledSignals>
      <StyledSignalsImg1 src="/heartbeat.svg" alt="/\" />
      <Heading size="headParagraph">Firebee Signals</Heading>
      <br />
      <Heading size="paragraph">A signal for every situation</Heading>
      <StyledSituations>
        <Situation />
        <Situation />
        <Situation />
        <Situation />
        <Situation />
        <Situation />
        <Situation />
        <Situation />
      </StyledSituations>
      <StyledSignalsImg2 src="/heartbeat.svg" alt="/\" />
    </StyledSignals>
  );
}

export default Signals;
