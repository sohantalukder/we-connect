import {Colors} from '@styles/colors.style.asset';
import {fonts} from '@styles/fonts.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {ReactElement} from 'react';
import {StyleSheet} from 'react-native';

export const inputStyles = (
  rightIcon: ReactElement | null | boolean,
  leftIcon: ReactElement | null | boolean,
  colors: Colors,
) =>
  StyleSheet.create({
    container: {
      gap: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.gray8,
      backgroundColor: colors.transparent,
      ...customPadding(0, 20, 0, 20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    activeContainer: {
      borderColor: colors.primary,
      backgroundColor: colors.transparent,
    },
    leftIcon: {
      position: 'absolute',
      right: 16,
    },
    input: {
      color: colors.default1,
      fontSize: 14,
      fontFamily: fonts.urbanist600,
      paddingVertical: 18,
      paddingRight: rightIcon ? 12 : 0,
      paddingLeft: leftIcon ? 8 : 0,
      flex: 1,
      textAlignVertical: 'center',
    },
  });
