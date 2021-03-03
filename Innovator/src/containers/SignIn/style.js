import {StyleSheet} from 'react-native';
import {scale, scaleVertical} from '../../utilities/scale';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    paddingBottom: scaleVertical(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  close: {
    position: 'absolute',
    top: 25,
    left: 16,
    zIndex: 1,
  },
  header: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: scaleVertical(100),
    resizeMode: 'contain',
  },
  all: {
    marginTop: scaleVertical(24),
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: scaleVertical(12),
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
    borderRadius: 50,
    padding: 18,
    marginVertical: scaleVertical(6),
    fontWeight: 'bold',
  },
  OR: {
    marginVertical: scaleVertical(12),
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  socialLogin: {
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleVertical(28),
    paddingHorizontal: 8,
  },
  textRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabelStyle: {color: '#484848', fontSize: 18},
});

export default styles;
