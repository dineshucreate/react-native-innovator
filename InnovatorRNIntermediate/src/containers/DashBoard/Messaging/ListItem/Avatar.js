import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import { styles } from "./style";

export default class Avatar extends PureComponent {
  render() {
    const { src } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.container} source={src} />
      </View>
    );
  }
}
