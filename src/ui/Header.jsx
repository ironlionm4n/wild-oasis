import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: linear-gradient(
    to right,
    var(--color-coral-200),
    var(--color-beige-100) 5% 80%,
    var(--color-beige-800)
  );
  color: var(--color-slate-700);
  line-height: 4rem;
  font-size: 3.4rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  word-spacing: 0.3rem;
  font-weight: 800;
  padding: 1.2rem 4.8rem;
  border-bottom: 2px solid var(--color-slate-500);
`;

const Header = () => {
  return <StyledHeader>Welcome to the Wild Oasis</StyledHeader>;
};

export default Header;
