import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utilities/Colors';

const styles = StyleSheet.create({
  flexCenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteLoaderSubContainer: {
    backgroundColor: Colors.white,
    height: scale(100),
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
});
export default styles;
