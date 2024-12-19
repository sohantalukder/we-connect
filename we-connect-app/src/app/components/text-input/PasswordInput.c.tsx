import React, {useRef, useState} from 'react';
import {
  KeyboardType,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {inputStyles} from './styles/input.styles';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import EyeOffIcon from '@icons/EyeOff.icon';
import EyeOnIcon from '@icons/EyeOn.icon';
import LockIcon from '@icons/Lock.icon';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';

type PasswordInputProps = {
  style?: ViewStyle;
  keyboardType?: KeyboardType;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChangeText?: (text: string, name?: string) => void;
  editable?: boolean;
  borderColor?: string;
  defaultValue?: string;
  bgColor?: string;
  inputRef?: React.RefObject<TextInput>;
  name?: string;
  onSubmitEditing?: () => void;
  returnKeyType?: TextInputProps['returnKeyType'];
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
};
const PasswordInput: React.FC<PasswordInputProps> = ({
  style = {},
  keyboardType = 'default',
  placeholder,
  maxLength = 256,
  value,
  onChangeText = () => {},
  defaultValue = '',
  inputRef,
  name = '',
  onSubmitEditing = () => {},
  returnKeyType = 'done',
  label,
  wrapperStyle,
  labelStyle,
}: PasswordInputProps) => {
  const colors = useTheme().colors as Colors;
  const styles = inputStyles({rightIcon: <></>, leftIcon: <></>, colors});
  const [isShowPass, setIsShowPass] = useState(false);
  const containerRef = useRef<any>(null);
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
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name);
    } else {
      onChangeText(text);
    }
  };
  const toggleShowPass = () => {
    setIsShowPass(!isShowPass);
  };
  return (
    <View style={[globalStyles.widthFull, wrapperStyle]}>
      {label && (
        <Text
          style={[
            typographies(colors).bodyLargeSemibold,
            {...customPadding(0, 0, 5)},
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <View style={[styles.container, style]} ref={containerRef}>
        <View>{<LockIcon width={20} height={20} />}</View>
        <TextInput
          style={[styles.input]}
          cursorColor={colors.primary}
          placeholderTextColor={colors.gray4}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          value={value?.toString()}
          onChangeText={handleOnChange}
          defaultValue={defaultValue?.toString()}
          ref={inputRef}
          selectionColor={colors.primary}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={!isShowPass}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <View style={[styles.leftIcon]}>
          <Pressable onPress={toggleShowPass}>
            {isShowPass === true ? (
              <EyeOffIcon width={20} height={20} />
            ) : (
              <EyeOnIcon width={20} height={20} />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PasswordInput;
