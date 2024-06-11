import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  //background-color: var(--color-beige-200);
  background: linear-gradient(
    var(--color-coral-200) 5%,
    var(--color-beige-300),
    var(--color-beige-500),
    var(--color-beige-900)
  );
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-slate-500);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const SideBar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default SideBar;
