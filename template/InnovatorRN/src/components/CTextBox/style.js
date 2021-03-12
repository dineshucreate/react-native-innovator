import {StyleSheet} from 'react-native';
import {Colors} from '../../utilities/Colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 5,
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    maxHeight: 60,
  },
  input: {
    flex: 0.9,
    height: 37,
    paddingLeft: 10,
    marginTop: 12,
    marginBottom: 12,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: 'transparent',
    color: Colors.black,
    fontSize: 14,
  },
  iconContainer: {
    flex: 0.1,
    paddingLeft: 10,
  },
  icon: {
    color: '#4A4A4A',
  },
});

export default style;
