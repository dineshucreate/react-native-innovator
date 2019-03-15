import React, { PureComponent } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Button from "./Button";
import Row from "../Messaging/Row";

class BottomButtons extends PureComponent {
  render() {
    const { isHidden, onBackPress } = this.props;

    return (
      <Row style={styles.container}>
        <View style={styles.flexContainer}>
          <Button
            isHidden={isHidden}
            name="present"
            backgroundColor="#008dff"
          />
        </View>
        <View style={styles.flexContainer}>
          <TouchableOpacity onPress={onBackPress}>
            <Button
              isHidden={isHidden}
              name="wallet"
              backgroundColor="#ff2d4c"
              delay={125}
            />
          </TouchableOpacity>
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 112,
    marginHorizontal: 16
  },
  flexContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BottomButtons;
