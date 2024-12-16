import rs from '@styles/responsiveSize.style.asset';
import {StyleSheet} from 'react-native';

const letsInStyles = StyleSheet.create({
  textCenter: {textAlign: 'center', marginTop: rs(30)},
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rs(16),
    justifyContent: 'center',
    paddingVertical: rs(10),
  },
  width42: {width: '42%'},
});

export default letsInStyles;
