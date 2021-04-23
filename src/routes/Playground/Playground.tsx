// Utils
import styled from "styled-components";

// Components
import { Route } from "react-router-dom";

// Routes
import { FlexRoute, WrapperRoute, HeadingRoute, SidePanel } from "./components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 60px;
`;

export function Playground(): JSX.Element {
  return (
    <Wrapper>
      <SidePanel />
      <Route exact path="/playground/flex" component={FlexRoute} />
      <Route exact path="/playground/wrapper" component={WrapperRoute} />
      <Route exact path="/playground/heading" component={HeadingRoute} />
    </Wrapper>
  );
}
