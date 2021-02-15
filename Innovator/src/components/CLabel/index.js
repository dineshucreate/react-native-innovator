import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {setTestIdentifier} from '../../utilities/misc';

class CLabel extends PureComponent {
  render() {
    const {text, style, testID} = this.props;
    return (
      <View>
        <Text {...setTestIdentifier(testID)} style={[style]}>
          {text}
        </Text>
      </View>
    );
  }
}
export default CLabel;
