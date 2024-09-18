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
  special: css`
    width: 244px;
    height: 30px;
    background: linear-gradient(90deg, #a34d9f 0%, #275fd0 100%);
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    border-radius: 100px;
    padding: 1px;
    color: var(--color-white-primary);
  `,
  veryLarge: css`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;

    color: var(--color-white-primary);
    width: clamp(390px, 40vw, 548px);
    height: 79px;

    border-radius: 48.5px;
    gap: 2rem;
  `,
  icon: css`
    background-color: transparent;
    padding: 0;
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  background-color: var(--color-green-primary);
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = {
  size: 'small',
};
export default Button;
