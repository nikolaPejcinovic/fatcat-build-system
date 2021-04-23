// Utils
import styled, { css } from "styled-components";
import { useHistory } from "react-router";

// Components
import { Link } from "react-router-dom";

// Interfaces
import { StyledProps } from "interfaces/types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 5px;
  background: white;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
  z-index: 1;
  position: fixed;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 20px;
  margin: 5px;
  background: #9400d340;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  color: darkviolet;
  border: 2px solid transparent;
  transition: background 200ms linear, border 200ms linear;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);

  &:hover {
    background: #9400d361;
  }

  ${({ $active }: StyledProps) => {
    if ($active) {
      return css`
        border: 2px solid #9400d363;
      `;
    }
  }}
`;

export function Header(): JSX.Element {
  const { location } = useHistory();

  return (
    <Wrapper>
      <StyledLink to="/" $active={location.pathname === "/"}>
        Overview
      </StyledLink>
      <StyledLink
        to="/playground"
        $active={location.pathname.includes("/playground")}
      >
        Playground
      </StyledLink>
    </Wrapper>
  );
}
