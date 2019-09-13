import {StyleSheet} from 'react-native';
import {Colors} from '../../utilities/Colors';

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.black,
    borderRadius: 100,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: 200,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  disabled: {
    opacity: 0.4,
  },
});
export default style;
