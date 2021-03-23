import React from 'react';
import {View, Text} from 'react-native';
import {setTestIdentifier} from '../../utilities/misc';

function CLabel (props) {
    const {text, style, testID} = props;
    return (
      <View>
        <Text {...setTestIdentifier(testID)} style={[style]}>
          {text}
        </Text>
      </View>
    );
  }

export default CLabel;
