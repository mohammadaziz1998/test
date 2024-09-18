import styled from 'styled-components';
import Heading from './Heading';

const StyledDoForMeText = styled.div`
  margin-inline: 2rem;
  padding: 2rem 0 1rem 0;
`;

function DoForMeText() {
  return (
    <StyledDoForMeText>
      <Heading size="doforme">What will Firebee do for me?</Heading>
      <br />
      <Heading size="paragraph">
        Firebee will help you gently nudge yourself into a different mental
        state
      </Heading>
    </StyledDoForMeText>
  );
}

export default DoForMeText;
