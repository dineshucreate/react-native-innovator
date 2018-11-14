import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class CLabel extends PureComponent {
  render() {
    const { text, style } = this.props;
    return (
      <View>
        <Text style={[style]}>
          {text}
        </Text>
      </View>
    );
  }
}
export default CLabel;

