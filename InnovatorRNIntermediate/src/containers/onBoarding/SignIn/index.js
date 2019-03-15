import React from "react";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import Style from "./style";
import CTextBox from "../../../components/CTextBox";
import CButton from "../../../components/CButton";
import CLabel from "../../../components/CLabel";
import { strings } from "../../../utilities/locales/i18n";
import { loginRequest, loginUpdateInput } from "./action";

class SignIn extends React.PureComponent {
  state = {
    hasPermission: false
  };
  componentDidMount = () => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          this.setState({ hasPermission: true });
        } else {
          this.requestForPushNotificationPermission();
        }
      });
  };
  requestForPushNotificationPermission = () => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        this.setState({ hasPermission: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  onSignInPress = () => {
    const { loginRequest, navigation } = this.props;
    loginRequest("dinesh@gmail.com", "Admin1", navigation);
  };
  onSignUpPress = () => {
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  };

  render() {
    return (
      <View style={Style.screen}>
        <View style={Style.all}>
          <CTextBox
            placeHolderText={strings("signIn.email")}
            onChangeText={value => {}}
            leftIcon="envelope-o"
            keyboardType="email-address"
          />
          <CTextBox
            placeHolderText={strings("signIn.password")}
            onChangeText={value => {}}
            leftIcon="lock"
            hidePassword={true}
          />
          <CButton
            disabled={!this.state.hasPermission}
            onPress={this.onSignInPress}
            text={strings("signIn.signIn")}
          />
        </View>
        <View style={Style.footer}>
          <CLabel
            style={Style.bottomLabelStyle}
            text={strings("signIn.bottomText")}
          />
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={this.onSignUpPress}
          >
            <CLabel
              style={{ color: "#0000EE", marginLeft: 5 }}
              text={strings("signIn.bottomText2")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.loginReducer.loading,
    loginDetails: state.loginReducer.loginDetails,
    isError: state.loginReducer.isError
  };
};
const mapDispatchToProps = dispatch => ({
  loginRequest: (email, passwordLogin, navigator) =>
    dispatch(loginRequest(email, passwordLogin, navigator)),
  updateInput: (key, value) => dispatch(loginUpdateInput(key, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
