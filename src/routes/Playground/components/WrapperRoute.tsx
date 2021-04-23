// Components
import { Wrapper } from "components/Wrapper";
import { RouteContainer } from "./RouteContainer";

// Interfaces
import { WrapperProps } from "interfaces/types";

const initSettings: WrapperProps = {
  mr: "auto",
  ml: "auto",
  width: "500px",
  maxWidth: "960px",
  height: "200px",
  maxHeight: "100%",
  pl: "20px",
  pr: "20px",
  backgroundColor: "darkviolet",
  borderRadius: "5px"
};

export function WrapperRoute(): JSX.Element {
  return (
    <RouteContainer initSettings={initSettings}>
      {({ settings }) => <Wrapper {...settings} />}
    </RouteContainer>
  );
}
