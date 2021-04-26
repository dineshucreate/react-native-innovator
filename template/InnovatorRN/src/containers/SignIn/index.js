import React from 'react';
import {TouchableOpacity, View, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Style from './style';
import CTextBox from '../../components/CTextBox';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
import {strings} from '../../../locales/i18n';
import {loginRequest, loginUpdateInput} from './action';
import {testIds} from '../../../constants/appConstants';
import {screenNames} from '../../../navigation/navigationConstants';
import config from '../../config';

function SignIn (props) {

  const loading = useSelector(state => state.loginReducer.loading);
  const loginDetails = useSelector(state => state.loginReducer.loginDetails);
  const isError = useSelector(state => state.loginReducer.isError);
  const dispatch = useDispatch();

  const onSignInPress = () => {
    dispatch(loginRequest({email: 'dinesh@gmail.com', passwordLogin: 'Admin1'}));
  };
  const onSignUpPress = () => {
    const {navigation} = props;
    navigation.navigate(screenNames.SignUp);
  };
    return (
      <SafeAreaView style={Style.screen}>
        <CLabel
          style={Style.bottomLabelStyle}
          text={`API_BASE_URL: ${config.API_BASE_URL}`}
          testID={testIds.abiBaseURL}
        />
        <View style={Style.all}>
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
          <CButton
            onPress={onSignInPress}
            text={strings('signIn.signIn')}
          />
        </View>
        <View style={Style.footer}>
          <CLabel
            style={Style.bottomLabelStyle}
            text={strings('signIn.bottomText')}
          />
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={onSignUpPress}>
            <CLabel
              style={{color: '#0000EE', marginLeft: 5}}
              text={strings('signIn.bottomText2')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default SignIn;
