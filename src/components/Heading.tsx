import React from "react";
import styled, { css } from "styled-components";

// Interfaces
import { HeaderProps, HeaderTransientProps } from "interfaces/types";

const Forwarded = styled.h1<HeaderTransientProps>`
  ${({ $color, $fontSize, $fontWeight, $height }: HeaderTransientProps) =>
    css`
      color: ${$color};
      font-size: ${$fontSize};
      font-weight: ${$fontWeight};
      height: ${$height};
    `}
`;

const Element = ({ forwardedAs, ...rest }): JSX.Element => (
  <Forwarded as={forwardedAs} {...rest} />
);

const Content: React.FC<HeaderProps> = ({
  type = "h1",
  content = "",
  fontSize = "inherit",
  fontWeight = "normal",
  color = "#000000",
  height = "fit-content"
}) => {
  const _type =
    ["h1", "h2", "h3", "h4", "h5", "h6"].find(h => h === type) || "h1";

  return (
    <Element
      forwardedAs={_type}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      $height={height}
    >
      {content}
    </Element>
  );
};

export function Heading({ ...props }: HeaderProps): JSX.Element {
  return <Content {...props} />;
}
