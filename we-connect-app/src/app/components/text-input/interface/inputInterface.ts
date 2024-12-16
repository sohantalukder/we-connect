import {TextInputProps, ViewStyle} from 'react-native';

export interface HeaderSearchInterface {
  onChange: (text: string) => void;
  defaultValue?: string;
  cancelHandler?: () => void;
  border?: 'showBorder' | 'noBorder';
}

export interface CustomInputProps {
  leftIcon?: any;
  rightIcon?: any;
  rightHandler?: () => void;
  placeholder?: string;
  onChangeText: (
    value: any,
    name?: any,
    validationRules?: boolean | any | undefined,
  ) => void;
  defaultValue?: any;
  name?: string | any | undefined;
  validationRules?: () => boolean | undefined | any;
  inputProps?: object;
  style?: ViewStyle;
}

export interface MultilineInputProps {
  placeholder?: string;
  onChangeText: (
    value: any,
    name?: any,
    validationRules?: boolean | any | undefined,
  ) => void;
  defaultValue?: any;
  name?: any;
  numberOfLines?: number;
  validationRules?: () => boolean | undefined | any;
  inputProps?: object;
  height?: number;
  textAlignVertical?: TextInputProps['textAlignVertical'];
}
