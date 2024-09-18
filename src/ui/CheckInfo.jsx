import styled from 'styled-components';

const StyledCheckInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 0.2rem;
`;

function CheckInfo({ children }) {
  return (
    <StyledCheckInfo>
      <img src="/check.svg" alt="check" />
      {children}
    </StyledCheckInfo>
  );
}

export default CheckInfo;
