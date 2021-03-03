import React from 'react';
import {TouchableOpacity, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Style from './style';
import CTextBox from '../../components/CTextBox';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
import {strings} from '../../../locales/i18n';
import {loginRequest, loginUpdateInput} from './action';
import {testIds} from '../../../constants/appConstants';
import {screenNames} from '../../../navigation/navigationConstants';
import config from '../../config';
class SignIn extends React.PureComponent {
  onSignInPress = () => {
    const {loginRequestAction} = this.props;
    loginRequestAction({email: 'dinesh@gmail.com', passwordLogin: 'Admin1'});
  };
  onSignUpPress = () => {
    const {navigation} = this.props;
    navigation.navigate(screenNames.SignUp);
  };
  render() {
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
            onPress={this.onSignInPress}
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
            onPress={this.onSignUpPress}>
            <CLabel
              style={{color: '#0000EE', marginLeft: 5}}
              text={strings('signIn.bottomText2')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loginReducer.loading,
    loginDetails: state.loginReducer.loginDetails,
    isError: state.loginReducer.isError,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginRequestAction: (email, passwordLogin) =>
    dispatch(loginRequest(email, passwordLogin)),
  updateInput: (key, value) => dispatch(loginUpdateInput(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
