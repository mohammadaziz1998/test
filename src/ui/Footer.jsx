import styled from 'styled-components';
import Heading from './Heading';
import { Link } from 'react-router-dom';

const StyledFooter = styled.div``;

const StyledFooterColor = styled.div`
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, #8bf2b5 0%, #35c8eb 100%);
`;
const StyledFooterLinks = styled.div`
  background-color: var(--color-black-third);
  border-bottom: 3px solid #525252;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: clamp(2rem, 15vw, 14rem);
  padding: 2rem;
  span {
    color: var(--color-white-primary);
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    a {
      color: var(--color-white-primary);
      text-decoration: none;
    }
  }
  div:last-child {
    margin-top: 1rem;
    div {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;
    }
  }
`;

const StyledCopyright = styled.div`
  width: 100%;
  height: 216px;
  background-size: 1500px 216px;
  background-image: url('/copyright.svg');
  @media (max-width: 650px) {
    padding-top: 1rem;
    width: 100%;
    height: 300px;

    background-size: 375px 400px;
    background-image: url('/copyrightS.svg');
    background-color: var(--color-black-third);
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <StyledFooterColor />
      <StyledFooterLinks>
        <div>
          <Heading size="paragraph">About</Heading>
          <Link>Home</Link>
          <Link>Product</Link>
        </div>
        <div>
          <Heading size="paragraph">Support</Heading>
          <Link>activate</Link>
          <Link>Login</Link>
        </div>
        <div>
          <Heading size="paragraph">Find Us On</Heading>
          <div>
            <Link>
              <img src="/youtube.svg" alt="link" />
            </Link>
            <Link>
              <img src="/facebook.svg" alt="link" />
            </Link>
            <Link>
              <img src="/twitter.svg" alt="link" />
            </Link>
            <Link>
              <img src="/instgram.svg" alt="link" />
            </Link>
            <Link>
              <img src="/p.svg" alt="link" />
            </Link>
          </div>
        </div>
      </StyledFooterLinks>
      <StyledCopyright>
        <div>
          <img src="/logoBig.svg" alt="logo" />
          <Heading size="footer">Privacy Policy Terms of Service</Heading>
        </div>
        <Heading size="footer">
          Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
        </Heading>
        <Heading size="footer">
          The statements on this page have not been evaluated by the FDA. This
          product is not intended to diagnose, treat, cure, or prevent any
          disease.
        </Heading>
      </StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
