import styled from 'styled-components';
import Heading from './Heading';

const StyledSutuation = styled.div`
  max-width: 420px;
  min-height: 210px;
  background-color: var(--color-white-third);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

function Situation() {
  return (
    <StyledSutuation>
      <img src="/bedtime.svg" alt="situation" />
      <Heading size="situation">
        Discover your best sleep with responsive sleep journeys, overnight sleep
        tracking, and personalized insights.
      </Heading>
    </StyledSutuation>
  );
}

export default Situation;
