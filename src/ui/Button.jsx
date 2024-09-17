import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 154px;
    height: 65px;
    border-radius: 32.5px;
    color: white;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  background-color: var(--color-green-primary);
  cursor: pointer;
  border: none;
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = {
  size: 'small',
};
export default Button;
