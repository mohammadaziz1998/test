import styled from 'styled-components';

const StyledKitHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function KitHead({ children }) {
  return <StyledKitHead>{children}</StyledKitHead>;
}

export default KitHead;
