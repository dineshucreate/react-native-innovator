import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

function CButton(props) {
    const {
      textStyle,
      buttonContainerStyle,
      onPress,
      text,
      disabled,
    } = props;
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

export default CButton;
