import styled, { css } from 'styled-components';

const styles = {
  add: css`
    font-family: Inter;
    font-size: 24px;
    font-weight: 800;
    line-height: 29.05px;
    letter-spacing: 0.1em;
    text-align: center;
  `,
  notadd: css`
    font-style: oblique;
  `,
};

const Heading = styled.span`
  color: white;
  color: ${(props) => props.color};
  font-size: 35px;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  line-height: 41.02px;
  ${(props) => styles[props.style]};
`;

export default Heading;
