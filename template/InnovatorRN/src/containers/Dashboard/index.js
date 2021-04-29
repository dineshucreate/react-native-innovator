import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';
import { goBack } from '../../../navigation/NavigationService';
import { useSelector, connect } from 'react-redux';

function DashBoard() {
  const loginData = useSelector(state => state.loginReducer.loginData);
  const onCrossPress = () => {
    goBack();
  };
  return (
    <View style={Style.constainer}>
      <TouchableOpacity onPress={onCrossPress}>
        <FontAwesome name="times" size={36} style={Style.crossButton} />
      </TouchableOpacity>
      <Text style={Style.textStyle}>Welcome To Dashboard!!!</Text>
      <Text style={Style.textStyle}>Login as: {loginData.email}</Text>
    </View>
  );
}

export default DashBoard;