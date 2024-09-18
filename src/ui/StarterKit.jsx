import styled from 'styled-components';
import Heading from './Heading';
import KitHead from './KitHead';
import Price from './Price';
import Button from './Button';
import CheckInfo from './CheckInfo';

const StyledStarterKit = styled.div`
  width: clamp(434px, 50vw, 634px);
  /* height: 337px; */
  background-color: var(--color-white-primary);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid #2d5ece;
`;

function StarterKit() {
  return (
    <StyledStarterKit>
      <KitHead>
        <Heading size="semiheadBold">Firebee Starter Kit</Heading>
        <Price discount={'$999.00'}>$379.00</Price>
      </KitHead>
      <Button size="special">MOST POPULAR KIT</Button>
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
    </StyledStarterKit>
  );
}

export default StarterKit;
