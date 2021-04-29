import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Style from './style';
import {goBack} from '../../navigation/NavigationService';
import {userSelector} from '../SignIn/slice';

function DashBoard() {
  const userData = useSelector(userSelector);

  const onCrossPress = () => {
    goBack();
  };
  return (
    <View style={Style.constainer}>
      <TouchableOpacity onPress={onCrossPress}>
        <FontAwesome name="times" size={36} style={Style.crossButton} />
      </TouchableOpacity>
      <Text style={Style.textStyle}>Welcome To Dashboard!!!</Text>
      <Text style={Style.textStyle}>Login as: {userData.email}</Text>
    </View>
  );
}

export default DashBoard;
