// Utils
import styled from "styled-components";

// Components
import { Route } from "react-router-dom";

// Path
import { Header } from "./components/Header";

// Routes
import { Playground } from "routes/Playground";
import { Overview } from "./components/Overview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function Home(): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <Route exact path="/" component={Overview} />
      <Route
        exact
        path={[
          "/playground",
          "/playground/flex",
          "/playground/wrapper",
          "/playground/heading"
        ]}
        component={Playground}
      />
    </Wrapper>
  );
}

export default Home;
