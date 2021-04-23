import { ReactNode } from "react";

export interface WrapperProps {
  mr?: string | number;
  ml?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  pl?: string | number;
  pr?: string | number;
  backgroundColor?: string;
  borderRadius?: string;
  children?: ReactNode;
}

export interface WrapperTransientProps {
  $mr?: string | number;
  $ml?: string | number;
  $maxWidth?: string | number;
  $width?: string | number;
  $height?: string | number;
  $maxHeight?: string | number;
  $pl?: string | number;
  $pr?: string | number;
  $backgroundColor?: string;
  $borderRadius?: string;
}

export interface FlexProps extends WrapperProps {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  justifyItems?: string;
  justifyContent?: string;
  justifySelf?: string;
  flex?: string | number;
  flexWrap?: string;
}

export interface FlexTransientProps extends WrapperTransientProps {
  $display?: string;
  $flexDirection?: string;
  $alignItems?: string;
  $alignContent?: string;
  $alignSelf?: string;
  $justifyItems?: string;
  $justifyContent?: string;
  $justifySelf?: string;
  $flex?: string | number;
  $flexWrap?: string;
}

export interface HeaderProps {
  type?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  content?: string;
  height?: string;
}

export interface HeaderTransientProps {
  $fontSize?: string;
  $fontWeight?: string | number;
  $color?: string;
  $height?: string;
}

interface RouteContainerChildrenProps {
  settings: object;
}

export interface RouteContainerProps {
  initSettings: HeaderProps | WrapperProps | FlexProps;
  children(props: RouteContainerChildrenProps): ReactNode;
}

export interface StyledProps {
  $active: boolean;
}
