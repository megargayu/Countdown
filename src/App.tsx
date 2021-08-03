import Countdown from "./pages/Countdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/countdown">
          <Countdown />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
