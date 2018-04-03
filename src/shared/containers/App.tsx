import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "../assets/scss/_main.scss";
import Home from "./Home";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route path="/about" render={(props) => {
          return <Link to="/">Back To Home</Link>
        }}/>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;