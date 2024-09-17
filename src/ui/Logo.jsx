import styled from 'styled-components';

const StyledLogo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.svg" alt="logo" />
      <img src="/logotext.svg" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
