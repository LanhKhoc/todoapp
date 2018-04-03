import * as React from "react";
import { connect } from 'react-redux';


import HomeComponent from "../components/Home";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <HomeComponent />
    );
  }
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);