// Components
import { Heading } from "components/Heading";
import { RouteContainer } from "./RouteContainer";

// Interfaces
import { HeaderProps } from "interfaces/types";

const initSettings: HeaderProps = {
  type: "h3",
  fontSize: "25px",
  fontWeight: "bold",
  color: "black",
  content: "Some dummy content",
  height: "fit-content"
};

export function HeadingRoute(): JSX.Element {
  return (
    <RouteContainer initSettings={initSettings}>
      {({ settings }) => <Heading {...settings} />}
    </RouteContainer>
  );
}
