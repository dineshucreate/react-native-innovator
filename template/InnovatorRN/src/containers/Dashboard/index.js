import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';
import {goBack} from '../../../navigation/NavigationService';
import {connect} from 'react-redux';

function DashBoard (props) {
  onCrossPress = () => {
    goBack();
  };
    const {
      loginData: {email},
    } = props;
    return (
      <View style={Style.constainer}>
        <TouchableOpacity onPress={onCrossPress}>
          <FontAwesome name="times" size={36} style={Style.crossButton} />
        </TouchableOpacity>
        <Text style={Style.textStyle}>Welcome To Dashboard!!!</Text>
        <Text style={Style.textStyle}>Login as: {email}</Text>
      </View>
    );
}
const mapStateToProps = (state) => {
  return {
    loginData: state.loginReducer.loginData,
  };
};
export default connect(mapStateToProps)(DashBoard);
