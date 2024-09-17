import styled from 'styled-components';
import Heading from './Heading';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useMedia } from '../context/MediaQueryContext';

const StyledAddHeader = styled.div`
  background: linear-gradient(
    50.02deg,
    #175985 20.08%,
    #1d354a 32.73%,
    #2c3c64 54.78%,
    #395ea3 82.72%
  );
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;
const StyledAddHeaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: Inter;
  font-weight: 800;
  line-height: 29.05px;
  letter-spacing: 0.1em;
  text-align: center;
`;
const STyledAddHeaderImg = styled.img`
  max-width: clamp(400px, 55vw, 692px);
  height: 100%;
`;
const StyledNavHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  box-shadow: 0px 1px 0px 0px #e3e3e3;
`;

const StyledNavHeaderLinks = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-align: left;

  a {
    color: var(--color-primary);
    padding: 0 1rem;
    text-decoration: none;
  }
`;
const StyledNavHeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;
const StyledHeaderProfile = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background-color: var(--color-blue-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Header() {
  const { isMatching } = useMedia();

  return (
    <div>
      <StyledAddHeader>
        <picture>
          <source srcSet="/addsmallL.svg" media="(max-width:600px)" />
          <STyledAddHeaderImg src="/addL.svg" alt="addimage" />
        </picture>
        <StyledAddHeaderText>
          <Heading fontSize="24px">Black Friday Sale Save $100</Heading>
        </StyledAddHeaderText>
        <picture>
          <source srcSet="/addsmallR.svg" media="(max-width:600px)" />
          <STyledAddHeaderImg src="/addR.svg" alt="addimage" />
        </picture>
      </StyledAddHeader>
      <StyledNavHeader>
        <Logo />
        {isMatching && (
          <StyledNavHeaderLinks>
            <Link>How it Works</Link>
            <Link>Signals</Link>
            <Link>Reviews</Link>
            <Link>Blog</Link>
          </StyledNavHeaderLinks>
        )}
        <StyledNavHeaderLeftDiv>
          <Button size="small">Buy Now</Button>
          {isMatching ? (
            <StyledHeaderProfile>
              <img src="/profile.svg" alt="" />
            </StyledHeaderProfile>
          ) : (
            <img src="/humberger.svg" alt="hum" />
          )}
        </StyledNavHeaderLeftDiv>
      </StyledNavHeader>
    </div>
  );
}

export default Header;
