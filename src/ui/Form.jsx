import styled, { css } from "styled-components";

const Form = styled.form`
  background-color: var(--color-slate-50);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 100%;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
