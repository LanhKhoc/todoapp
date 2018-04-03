import * as React from 'react';
import { Link } from "react-router-dom";

const HomeComponent: React.SFC<{}> = () => {
  return (
    <div>
      <img src={require("../assets/img/default_avatar.png")} />
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomeComponent;