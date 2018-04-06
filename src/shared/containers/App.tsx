import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "../assets/scss/_main.scss";
import LoginMiddleware from "../middlewares/LoginMiddleware";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <LoginMiddleware path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;