// Components
import { Flex } from "components/Flex";
import { RouteContainer } from "./RouteContainer";

// Interfaces
import { FlexProps } from "interfaces/types";

const initSettings: FlexProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  alignContent: "center",
  alignSelf: "center",
  justifyItems: "center",
  justifyContent: "center",
  justifySelf: "center",
  flex: "0 1 auto",
  flexWrap: "wrap",
  width: "100px",
  mr: "auto",
  ml: "auto"
};

export function FlexRoute(): JSX.Element {
  return (
    <RouteContainer initSettings={initSettings}>
      {({ settings }) => <Flex {...settings} />}
    </RouteContainer>
  );
}
