import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.4rem;
    line-height: 1.4;
  `,
  medium: css`
    font-size: 1.6rem;
    line-height: 1.6;
  `,
  large: css`
    font-size: 1.8rem;
    line-height: 1.8;
  `,
};

const variations = {
  primary: css`
    color: var(--color-slate-900);
  `,
  secondary: css`
    color: var(--color-slate-700);
  `,
  danger: css`
    color: var(--color-red-400);
    font-weight: 600;
    word-spacing: 0.2rem;
  `,
};

const Paragraph = styled.p`
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

export default Paragraph;
