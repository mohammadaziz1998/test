import styled, { css } from 'styled-components';

const sizes = {
  add: css`
    color: white;
    font-family: Inter;
    font-size: 24px;
    font-weight: 800;
    line-height: 29.05px;
    letter-spacing: 0.1em;
    text-align: center;
  `,
  headBold: css`
    font-family: Poppins;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    text-align: left;
  `,
  semiheadBold: css`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
  `,
  normal: css`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
  `,
  paragraph: css`
    font-family: Poppins;
    font-size: clamp(18px, 4vw, 24px);
    font-weight: 300;
    line-height: clamp(27px, 7vw, 36px);
  `,
  headParagraph: css`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 300;
    line-height: 82px;
  `,
  situation: css`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-align: left;
  `,
  doforme: css`
    font-family: Poppins;
    font-size: clamp(36px, 10vw, 72px);
    font-weight: 300;
    line-height: clamp(46px, 10vw, 82px);
    /* text-align: left; */
  `,
  doformesecondary: css`
    font-family: Poppins;
    font-size: clamp(18px, 6vw, 30px);
    font-weight: 300;
    line-height: clamp(27px, 6vw, 45px);
    text-align: left;
  `,
  box: css`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.25em;
    text-align: left;
  `,
  question: css`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    /* text-align: left; */
  `,
  answer: css`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    text-align: start;
  `,
  footer: css`
    color: var(--color-white-forth);
    font-family: Poppins;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-align: left;
  `,
};

const Heading = styled.span`
  color: var(--color-black-primary);
  ${(props) => sizes[props.size]};
  font-size: ${(props) => props.fontSize};
`;
Heading.defaultProps = {
  size: 'normal',
};
export default Heading;
