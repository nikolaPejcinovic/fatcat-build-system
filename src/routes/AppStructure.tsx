import { lazy } from "react";

// Components
import { Switch, Route } from "react-router-dom";

// Routes
const Home = lazy(() => import("./Home"));

function AppStructure(): JSX.Element {
  return (
    <Switch>
      <Route
        exact
        path={[
          "/",
          "/playground",
          "/playground/flex",
          "/playground/wrapper",
          "/playground/heading"
        ]}
        component={Home}
      />
    </Switch>
  );
}

export default AppStructure;
