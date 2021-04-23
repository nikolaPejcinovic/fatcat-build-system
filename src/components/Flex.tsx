import styled, { css } from "styled-components";

// Interfaces
import { FlexProps, FlexTransientProps } from "interfaces/types";

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
    $borderRadius,
    $display,
    $flexDirection,
    $alignItems,
    $alignContent,
    $alignSelf,
    $justifyItems,
    $justifyContent,
    $justifySelf,
    $flex,
    $flexWrap
  }: FlexTransientProps) =>
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
      display: ${$display};
      flex-direction: ${$flexDirection};
      align-items: ${$alignItems};
      align-content: ${$alignContent};
      align-self: ${$alignSelf};
      justify-items: ${$justifyItems};
      justify-content: ${$justifyContent};
      justify-self: ${$justifySelf};
      flex: ${$flex};
      flex-wrap: ${$flexWrap};
    `}
`;

export function Flex({
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
  display = "flex",
  flexDirection = "row",
  alignItems = "center",
  alignContent = "center",
  alignSelf = "center",
  justifyItems = "center",
  justifyContent = "center",
  justifySelf = "center",
  flex = "0 1 auto",
  flexWrap = "nowrap",
  children
}: FlexProps): JSX.Element {
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
      $display={display}
      $flexDirection={flexDirection}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $alignSelf={alignSelf}
      $justifyItems={justifyItems}
      $justifyContent={justifyContent}
      $justifySelf={justifySelf}
      $flex={flex}
      $flexWrap={flexWrap}
    >
      {children}
    </Content>
  );
}
