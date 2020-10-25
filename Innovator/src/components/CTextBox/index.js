import React, {PureComponent} from 'react';
import {View, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';
import {Colors} from '../../utilities/Colors';

class CTextBox extends PureComponent {
  render() {
    const {
      hidePassword,
      containerStyle,
      style,
      maxLength,
      keyboardType,
      onChangeText,
      value,
      leftIcon,
      editable,
      placeHolderText,
    } = this.props;
    return (
      <View style={[Style.container, containerStyle]}>
        <View style={Style.iconContainer}>
          <FontAwesome name={leftIcon} size={20} style={Style.icon} />
        </View>
        <TextInput
          style={[Style.input, style]}
          underlineColorAndroid="transparent"
          placeholder={placeHolderText}
          placeholderTextColor={Colors.black}
          secureTextEntry={hidePassword}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          editable={editable}
          selectionColor={Colors.black}
        />
      </View>
    );
  }
}

export default CTextBox;
