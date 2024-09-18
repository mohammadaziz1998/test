import styled from 'styled-components';
import Heading from '../Heading';
import CheckInfo from '../CheckInfo';

const StyledFirebeeBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
`;
const StyledJornals = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem 2rem 2rem;
  border-bottom: 2px solid #c4c4c4;
`;

const StyledFirebeeBoxImg = styled.img`
  width: clamp(346px, 60vw, 824px);
  height: clamp(232px, 40vw, 519px);
`;
const StyledJornalsImg = styled.img`
  width: clamp(89px, 50vw, 111px);
  height: clamp(48px, 30vw, 60px);
`;

const StyledFeaturesList = styled.div`
  display: flex;
  margin: 2rem;
  gap: 4rem;
  @media (max-width: 950px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    align-self: flex-start;
  }
`;
function FirebeeBox() {
  return (
    <StyledFirebeeBox>
      <Heading size="doforme">What’s in the box?</Heading>
      <StyledFirebeeBoxImg src="/firebeebox.svg" alt="box" />
      <Heading size="box">featured on</Heading>
      <StyledJornals>
        <StyledJornalsImg src="/go.svg" alt="jornal" />
        <StyledJornalsImg src="/guardian.svg" alt="jornal" />
        <StyledJornalsImg src="/newyorktimes.svg" alt="jornal" />
        <StyledJornalsImg src="/mashable.svg" alt="jornal" />
        <StyledJornalsImg src="/cnn.svg" alt="jornal" />
        <StyledJornalsImg src="/wallstreet.svg" alt="jornal" />
      </StyledJornals>
      <StyledFeaturesList>
        <CheckInfo>
          <Heading size="doformesecondary">1 Firebeeheadband</Heading>
        </CheckInfo>
        <CheckInfo>
          <Heading size="doformesecondary">1 Charging cable</Heading>
        </CheckInfo>
        <CheckInfo>
          <Heading size="doformesecondary">1 User manual</Heading>
        </CheckInfo>
      </StyledFeaturesList>
    </StyledFirebeeBox>
  );
}

export default FirebeeBox;
