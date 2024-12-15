import {
  Text,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
  View,
} from 'react-native';
import React from 'react';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {ButtonProps} from '../types/interface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import CustomRipple from '../ripple/CustomRipple.c';

const Button: React.FC<ButtonProps> = ({
  text = '',
  borderRadius = 16,
  bgColor,
  textColor,
  textStyle = {},
  onPress,
  icon,
  isLoading,
  disabled,
  rippleColor,
  wrapStyle,
}) => {
  const colors = useTheme().colors as Colors;
  const styles = buttonStyles(borderRadius, bgColor || colors.primary, icon);
  return (
    <CustomRipple
      onPress={onPress}
      color={bgColor || colors.primary}
      disabled={disabled}
      borderRadius={borderRadius}
      rippleColor={rippleColor}>
      <View style={[styles.container, wrapStyle]}>
        {icon}
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text
            style={[
              typographies(colors).bodyLargeBold,
              {color: textColor || colors.default1},
              textStyle,
            ]}
            numberOfLines={1}>
            {text}
          </Text>
        )}
      </View>
    </CustomRipple>
  );
};

export default Button;

const buttonStyles = (borderRadius: number, bgColor: ColorValue, icon: any) =>
  StyleSheet.create({
    container: {
      borderRadius,
      backgroundColor: bgColor,
      flexShrink: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: rs(58),
      flexDirection: 'row',
      gap: icon ? rs(10) : 0,
    },
  });
