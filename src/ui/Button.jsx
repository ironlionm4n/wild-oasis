import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-slate-50);
    background-color: var(--color-earth-green-400);

    &:hover {
      background-color: var(--color-earth-green-600);
    }
  `,
  secondary: css`
    color: var(--color-slate-600);
    background: var(--color-beige-100);
    border: 1px solid var(--color-slate-200);

    &:hover {
      color: var(--color-slate-600);
      background-color: var(--color-beige-300);
    }
  `,
  tertiary: css`
    color: var(--color-slate-600);
    background-color: var(--color-slate-100);

    &:hover {
      background-color: var(--color-slate-200);
    }
  `,
  quatertiary: css`
    color: var(--color-slate-600);
    background-color: var(--color-coral-200);

    &:hover {
      background-color: var(--color-coral-400);
    }
  `,
  danger: css`
    color: var(--color-slate-50);
    background-color: var(--color-red-400);
    letter-spacing: 0.08rem;

    &:hover {
      font-weight: 600;
      color: var(--color-slate-100);
      background-color: var(--color-red-500);
      transition: all 0.3s ease-out;
      transform: scale(1.05);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
