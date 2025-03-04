import {Colors} from '@styles/colors.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {StyleSheet} from 'react-native';

const callListStyle = (colors: Colors) =>
  StyleSheet.create({
    button: {
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.62,
      elevation: 5,
      position: 'absolute',
      width: rs(60),
      height: rs(60),
      bottom: rs(20),
      right: rs(24),
    },
  });

export default callListStyle;
