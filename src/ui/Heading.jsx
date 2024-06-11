import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  line-height: 1.4;
  background-color: var(--color-slate-50);
  color: var(--color-slate-700);
  text-transform: capitalize;
  border: 2px solid var(--color-teal-800);
  box-shadow: 0.2rem 0.2rem 0.4rem var(--color-teal-800);
  padding: 1rem;
  border-radius: 0.8rem;
`;

export default Heading;
