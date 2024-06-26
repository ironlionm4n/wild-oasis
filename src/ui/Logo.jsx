import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  border-bottom: 1px solid var(--color-coral-300);
  padding: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
