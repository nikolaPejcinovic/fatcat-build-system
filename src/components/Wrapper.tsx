import styled, { css } from "styled-components";

// Interfaces
import { WrapperProps, WrapperTransientProps } from "interfaces/types";

const Content = styled.div`
  ${({
    $ml,
    $mr,
    $width,
    $maxWidth,
    $height,
    $maxHeight,
    $pl,
    $pr,
    $backgroundColor,
    $borderRadius
  }: WrapperTransientProps) =>
    css`
      margin-left: ${$ml};
      margin-right: ${$mr};
      width: ${$width};
      max-width: ${$maxWidth};
      height: ${$height};
      max-height: ${$maxHeight};
      padding-left: ${$pl};
      padding-right: ${$pr};
      background: ${$backgroundColor};
      border-radius: ${$borderRadius};
    `}
`;

export function Wrapper({
  mr = "auto",
  ml = "auto",
  width = "auto",
  maxWidth = "960px",
  height = "200px",
  maxHeight = "200px",
  pl = 0,
  pr = 0,
  backgroundColor = "#ffffff",
  borderRadius = "5px",
  children
}: WrapperProps): JSX.Element {
  return (
    <Content
      $ml={ml}
      $mr={mr}
      $width={width}
      $maxWidth={maxWidth}
      $height={height}
      $maxHeight={maxHeight}
      $pl={pl}
      $pr={pr}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
    >
      {children}
    </Content>
  );
}
