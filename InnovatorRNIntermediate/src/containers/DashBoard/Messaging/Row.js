import React, { PureComponent } from "react";
import { View } from "react-native";
import { styles } from "./style";

export default class Row extends PureComponent {
  render() {
    const { style, children } = this.props;
    return <View style={[styles.rowConatiner, style]}>{children}</View>;
  }
}
