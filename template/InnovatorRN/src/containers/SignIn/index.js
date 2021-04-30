import React from 'react';
import {TouchableOpacity, View, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';
import CTextBox from '../../components/CTextBox';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
import {strings} from '../../locales/i18n';
import {testIds} from '../../constants/appConstants';
import {screenNames} from '../../navigation/navigationConstants';
import config from '../../config';
import Loader from '../../components/Loader';
import {loginRequest} from './slice';

function SignIn(props) {
  const loading = useSelector((state) => state.loginReducer.loading);
  const dispatch = useDispatch();

  const onSignInPress = () => {
    dispatch(loginRequest({email: 'test@yopmail.com', password: 'qwerty'}));
  };
  const onSignUpPress = () => {
    const {navigation} = props;
    navigation.navigate(screenNames.SignUp);
  };
  return (
    <SafeAreaView style={style.screen}>
      <CLabel
        style={style.bottomLabelStyle}
        text={`API_BASE_URL: ${config.API_BASE_URL}`}
        testID={testIds.abiBaseURL}
      />
      <View style={style.all}>
        <CTextBox
          placeHolderText={strings('signIn.email')}
          onChangeText={(value) => {}}
          leftIcon="envelope-o"
          keyboardType="email-address"
        />
        <CTextBox
          placeHolderText={strings('signIn.password')}
          onChangeText={(value) => {}}
          leftIcon="lock"
          hidePassword={true}
        />
        <CButton onPress={onSignInPress} text={strings('signIn.signIn')} />
      </View>
      <View style={style.footer}>
        <CLabel
          style={style.bottomLabelStyle}
          text={strings('signIn.bottomText')}
        />
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={onSignUpPress}>
          <CLabel
            style={{color: '#0000EE', marginLeft: 5}}
            text={strings('signIn.bottomText2')}
          />
        </TouchableOpacity>
      </View>

      <Loader loading={loading} absolute />
    </SafeAreaView>
  );
}

export default SignIn;
