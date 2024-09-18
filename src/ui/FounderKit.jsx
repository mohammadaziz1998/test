import styled from 'styled-components';
import Heading from './Heading';
import KitHead from './KitHead';
import Price from './Price';
import CheckInfo from './CheckInfo';

const StyledFounderKit = styled.div`
  width: clamp(434px, 50vw, 634px);
  /* height: 337px; */
  background-color: var(--color-white-primary);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #c4c4c4;
`;

function FounderKit() {
  return (
    <StyledFounderKit>
      <KitHead>
        <Heading size="semiheadBold">Founder’s Kit</Heading>
        <Price>$379.00</Price>
      </KitHead>
      <div>
        <CheckInfo>
          <Heading>Access to 7 signals (and future signal releases)</Heading>
        </CheckInfo>
        <CheckInfo>
          <Heading>Firebee Headband </Heading>
        </CheckInfo>
        <CheckInfo>
          <Heading>$19/month membership, first 2 months free</Heading>
        </CheckInfo>
      </div>
      <Heading>
        The starter kit is the most affordable way to get started with Firebee.
        Pay $299 for the Firebee headband and access to the entire Firebee
        Signal Catalogue for only $19 a month. Membership can be cancelled
        anytime. No contracts. Satisfaction guaranteed.
      </Heading>
    </StyledFounderKit>
  );
}

export default FounderKit;
