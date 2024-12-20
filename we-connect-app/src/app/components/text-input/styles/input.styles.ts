import {IconProps} from '@entity-models/iconProps.types';
import {Colors} from '@styles/colors.style.asset';
import {fonts} from '@styles/fonts.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {ReactElement} from 'react';
import {StyleSheet} from 'react-native';

export const inputStyles = ({
  leftIcon,
  rightIcon,
  colors,
}: {
  rightIcon?: ReactElement<IconProps>;
  leftIcon?: ReactElement<IconProps>;
  colors: Colors;
}) =>
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
    multiLineContainer: {
      gap: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.gray8,
      backgroundColor: colors.transparent,
      ...customPadding(0, 5, 0, 5),
      flexDirection: 'row',
    },
    activeContainer: {
      borderColor: colors.primary,
    },
    errorContainer: {
      borderColor: colors.error1,
    },
    leftIcon: {
      position: 'absolute',
      right: 16,
    },
    input: {
      color: colors.default1,
      fontSize: 16,
      fontFamily: fonts.urbanist600,
      paddingVertical: 18,
      paddingRight: rightIcon ? 12 : 0,
      paddingLeft: leftIcon ? 8 : 0,
      flex: 1,
      textAlignVertical: 'center',
    },
    phoneInput: {
      color: colors.default1,
      fontSize: 16,
      fontFamily: fonts.urbanist600,
      textAlignVertical: 'center',
      padding: 0,
    },
  });
