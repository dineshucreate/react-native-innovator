import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';

class DashBoard extends React.PureComponent {
  onCrossPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    return (
      <View style={Style.constainer}>
        <TouchableOpacity onPress={this.onCrossPress}>
          <FontAwesome name="times" size={36} style={{ color: '#4A4A4A' }} />
        </TouchableOpacity>
        <Text style={Style.textStyle}>
                    Welcome To Dashboard!!!
          </Text>
      </View>
    );
  }
}
export default DashBoard;
