import React from "react";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import Ucreate from "./Ucreate";
import UcreateDetail from "./UcreateDetail";

const Navigator = FluidNavigator(
  {
    Ucreate: { screen: Ucreate },
    UcreateDetail: { screen: UcreateDetail }
  },
  {
    style: { backgroundColor: "white" },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

export default class Home extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return <Navigator navigation={navigation} />;
  }
}
