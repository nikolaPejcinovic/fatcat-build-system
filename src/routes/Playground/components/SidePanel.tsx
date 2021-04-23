// Utils
import styled, { css } from "styled-components";
import { useHistory } from "react-router";

// Components
import { Link } from "react-router-dom";

// Interfaces
import { StyledProps } from "interfaces/types";

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: darkviolet;
  font-weight: bold;
  transition: background 400ms linear;
  position: relative;

  &:hover {
    background: #f0f2f5;
  }

  ${({ $active }: StyledProps) => {
    if ($active) {
      return css`
        background: #f0f2f5;

        &::after {
          content: "";
          height: 20px;
          width: 20px;
          position: absolute;
          background: darkviolet;
          right: 15px;
          border-radius: 50%;
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
          transition: background 400ms linear;
        }
      `;
    }
  }}
`;

export function SidePanel(): JSX.Element {
  const { location } = useHistory();

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <Wrapper>
      <StyledLink to="/playground/flex" $active={isActive("flex")}>
        Flex
      </StyledLink>
      <StyledLink to="/playground/wrapper" $active={isActive("wrapper")}>
        Wrapper
      </StyledLink>
      <StyledLink to="/playground/heading" $active={isActive("heading")}>
        Heading
      </StyledLink>
    </Wrapper>
  );
}
