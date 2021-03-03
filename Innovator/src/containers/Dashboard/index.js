import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';
import {goBack} from '../../../navigation/NavigationService';

class DashBoard extends React.PureComponent {
  onCrossPress = () => {
    goBack();
  };
  render() {
    const {email} = this.props.route.params;
    return (
      <View style={Style.constainer}>
        <TouchableOpacity onPress={this.onCrossPress}>
          <FontAwesome name="times" size={36} style={Style.crossButton} />
        </TouchableOpacity>
        <Text style={Style.textStyle}>Welcome To Dashboard!!!</Text>
        <Text style={Style.textStyle}>Login as: {email}</Text>
      </View>
    );
  }
}
export default DashBoard;
