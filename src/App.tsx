// Utils
import { Suspense, lazy } from "react";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "components/Loader";

// Routes
const AppStructure = lazy(() => import("./routes/AppStructure"));

export function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AppStructure />
      </Suspense>
    </Router>
  );
}
