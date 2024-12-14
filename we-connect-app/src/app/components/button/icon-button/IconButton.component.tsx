import {StyleSheet} from 'react-native';
import React from 'react';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import {_iconButton} from '../types/interface';
import {TouchableRipple} from 'react-native-paper';

const IconButton: React.FC<_iconButton> = ({
  icon,
  onPress,
  bgColor = customTheme.colors.elevation1,
  style,
  disabled,
}) => {
  return (
    <TouchableRipple
      disabled={disabled}
      borderless
      onPress={onPress}
      rippleColor={'rgba(255, 255, 255, 0.2)'}
      style={[styles.container, {backgroundColor: bgColor}, style]}>
      {icon}
    </TouchableRipple>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: rs(48),
    width: rs(48),
    padding: 0,
    borderRadius: rs(5000),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
  },
});
