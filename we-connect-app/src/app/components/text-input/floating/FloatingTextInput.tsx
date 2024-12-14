/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useRef,
  ReactElement,
  RefObject,
  useEffect,
} from 'react';
import {
  View,
  Animated,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TextInput as ReactTextInput,
  StyleProp,
} from 'react-native';
import styles from './styles';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import {TextInput, TextInputAffixProps} from 'react-native-paper';

export interface _floatingLabelInputProps extends TextInputProps {
  label: string;
  onChangeValue?: (text: string, value: string) => void;
  rightIcon?: ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: StyleProp<TextStyle>;
  inputRef?: RefObject<ReactTextInput>;
  name?: string;
}

const FloatingTextInput = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  rightIcon,
  inputRef,
  onChangeValue,
  name,
  ...props
}: _floatingLabelInputProps) => {
  const [val, setValue] = useState('');
  const onChangeText = (text: string) => {
    setValue(text);
    onChangeValue ? onChangeValue(text, name || '') : () => {};
  };
  return (
    <View
    // style={[
    //   styles.inputContainer,
    //   {paddingRight: rightIcon ? rs(17) : 0},
    //   containerStyle,
    // ]}
    >
      <TextInput
        style={[{color: 'red'}]}
        // value={val}
        // ref={inputRef}
        textColor="red"
        // selectionHandleColor={'red'}
        label={'Hello World'}
        placeholder="Type Something"
        mode="outlined"
        // textAlignVertical="center"
        // onChangeText={text => onChangeText(text)}
      />
      {rightIcon}
    </View>
  );
};
export default FloatingTextInput;
