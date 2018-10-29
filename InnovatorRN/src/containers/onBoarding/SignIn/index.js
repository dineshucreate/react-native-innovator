import React from "react";
import {
  TouchableOpacity,
  View
} from "react-native";
import Style from './style';
import CTextBox from '../../../components/CTextBox';
import CButton from '../../../components/CButton';
import CLabel from '../../../components/CLabel';
import { strings } from '../../../utilities/locales/i18n';

class SignIn extends React.PureComponent {
  onSignInPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Dashboard");
  }
  onSignUpPress = () => {
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  }
  render() {
    return (
      <View
        style={Style.screen}
      >
        <View style={Style.all}>
          <CTextBox
            placeHolderText={strings('signIn.email')}
            onChangeText={(value) => { }}
            leftIcon='envelope-o'
            keyboardType="email-address"
          />
          <CTextBox
            placeHolderText={strings('signIn.password')}
            onChangeText={(value) => { }}
            leftIcon='lock'
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
          <TouchableOpacity style={{ alignSelf: 'center' }}
            onPress={this.onSignUpPress}>
            <CLabel
              style={{ color: '#0000EE', marginLeft: 5 }}
              text={strings('signIn.bottomText2')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignIn;
