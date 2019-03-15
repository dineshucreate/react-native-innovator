import React, { PureComponent } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { ScaleAndOpacity } from "react-native-motion";
import Header from "./Header";
import Content from "./Content";
import { styles } from "./style";

export default class ListItem extends PureComponent {
  onPressed = event => {
    const { onPress, item } = this.props;
    onPress(item, event.nativeEvent);
  };
  render() {
    const { item, style, isHidden, animateOnDidMount } = this.props;
    const { name, isApproved, ...rest } = item;

    return (
      <ScaleAndOpacity
        isHidden={isHidden}
        animateOnDidMount={animateOnDidMount}
      >
        {/* onPress={this.onPressed} */}
        <TouchableWithoutFeedback>
          <View
            style={[styles.listViewContainer, style]}
            pointerEvents="box-only"
          >
            <Header name={name} isApproved={isApproved} />
            <Content {...rest} isApproved={isApproved} />
          </View>
        </TouchableWithoutFeedback>
      </ScaleAndOpacity>
    );
  }
}
