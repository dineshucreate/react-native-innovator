import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

class CButton extends PureComponent {
  render() {
    const {
      textStyle,
      buttonContainerStyle,
      onPress,
      text,
      disabled,
    } = this.props;
    return (
      <View style={[style.buttonContainerStyle, buttonContainerStyle]}>
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={onPress}
          disabled={disabled}>
          <Text style={[style.buttonTextStyle, textStyle]}>
            {text.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CButton;
