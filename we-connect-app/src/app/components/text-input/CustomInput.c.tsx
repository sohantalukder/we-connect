import React, {useRef} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {CustomInputProps} from './interface/inputInterface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {inputStyles} from './styles/input.styles';

const CustomInput: React.FC<CustomInputProps> = ({
  rightHandler,
  leftIcon,
  rightIcon,
  placeholder = '',
  onChangeText,
  defaultValue = '',
  name,
  validationRules = undefined,
  inputProps = {},
  style = {},
}) => {
  const colors = useTheme().colors as Colors;
  const styles = inputStyles(rightIcon, leftIcon, colors);
  const containerRef = useRef<any>(null);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name, validationRules);
    } else {
      onChangeText(text, undefined, validationRules);
    }
  };
  const handleOnFocus = () => {
    containerRef.current.setNativeProps({
      style: {...styles.activeContainer},
    });
  };
  const handleOnBlur = () => {
    containerRef.current.setNativeProps({
      style: {...styles.container},
    });
  };
  return (
    <View style={[styles.container, style]} ref={containerRef}>
      {leftIcon && <View>{leftIcon}</View>}
      <TextInput
        style={styles.input}
        numberOfLines={1}
        onChangeText={handleOnChange}
        placeholder={placeholder}
        placeholderTextColor={colors.gray4}
        defaultValue={defaultValue?.toString()}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...inputProps}
      />
      {rightIcon && (
        <TouchableOpacity activeOpacity={0.5} onPress={rightHandler}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
