import {
  Text,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
  View,
} from 'react-native';
import React from 'react';
import {_buttonProps} from '../types/interface';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {TouchableRipple} from 'react-native-paper';

const Button: React.FC<_buttonProps> = ({
  text = '',
  borderRadius = 4,
  bgColor,
  style = {},
  textColor,
  textStyle = {},
  onPress,
  icon,
  isLoading,
  disabled,
  rippleColor = 'rgba(1,1,1, 0.1)',
  wrapStyle,
}) => {
  const styles = buttonStyles(
    borderRadius,
    bgColor || customTheme.colors.primary,
    icon,
  );
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor={rippleColor}
      disabled={disabled || isLoading}
      style={style}>
      <View style={[styles.container, wrapStyle]}>
        {icon}
        {isLoading ? (
          <ActivityIndicator color={customTheme.colors.pureWhite} />
        ) : (
          <Text
            style={[
              typographies.labelLarge,
              {color: textColor || customTheme.colors.text_dark},
              textStyle,
            ]}
            numberOfLines={1}>
            {text}
          </Text>
        )}
      </View>
    </TouchableRipple>
  );
};

export default Button;

const buttonStyles = (borderRadius: number, bgColor: ColorValue, icon: any) =>
  StyleSheet.create({
    container: {
      borderRadius,
      backgroundColor: bgColor,
      flexShrink: 1,
      paddingVertical: rs(10),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: icon ? rs(10) : 0,
    },
  });
