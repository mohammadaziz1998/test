import styled from 'styled-components';
import Heading from '../Heading';
import { useMedia } from '../../context/MediaQueryContext';
import DoForMeText from '../DoForMeText';

const StyledDoForMe = styled.div`
  text-align: center;
  background-color: var(--color-white-third);
  margin: 4rem 0;
  padding: 2rem 0;
`;

const StyledDoForMeSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.7rem;
`;
const StyledDoForMeImg = styled.img`
  width: clamp(375px, 50vw, 598px);
`;
const StyledDoSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  div {
    display: flex;
    gap: 1rem;
  }
`;

function DoForMe() {
  const { isMatching } = useMedia();
  return (
    <StyledDoForMe>
      {isMatching && <DoForMeText />}
      <StyledDoForMeSteps>
        <StyledDoForMeImg src="/doformeperson.svg" alt="person" />
        {!isMatching && <DoForMeText />}
        <StyledDoSteps>
          <div>
            <img src="/check.svg" alt="check" />
            <Heading size="doformesecondary">
              Can’t sleep? Turn on the deep sleep signal
            </Heading>
          </div>
          <div>
            <img src="/check.svg" alt="check" />
            <Heading size="doformesecondary">
              Feeling tired? Turn on the alert signal
            </Heading>
          </div>
          <div>
            <img src="/check.svg" alt="check" />
            <Heading size="doformesecondary">
              Feeling anxious? Turn on the calm signal
            </Heading>
          </div>
          <div>
            <img src="/check.svg" alt="check" />
            <Heading size="doformesecondary">
              Feeling unproductive? Turn on the focus signal
            </Heading>
          </div>
          <div>
            <img src="/check.svg" alt="check" />
            <Heading size="doformesecondary">
              Feeling blue? Turn on the happy signal
            </Heading>
          </div>
        </StyledDoSteps>
      </StyledDoForMeSteps>
    </StyledDoForMe>
  );
}

export default DoForMe;
