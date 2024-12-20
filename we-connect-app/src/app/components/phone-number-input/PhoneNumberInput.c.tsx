import {View, ViewStyle} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {inputStyles} from '@components/text-input/styles/input.styles';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import DownArrowIcon from '@icons/DownArrow.icon';
import rs from '@styles/responsiveSize.style.asset';
import {PhoneNumberInputProps} from '@components/text-input/interface/inputInterface';

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChangeText,
  defaultCode,
  defaultValue,
  inputProps,
  name,
  style,
  placeholder = 'Phone Number',
}) => {
  const phoneInput = useRef<PhoneInput>(null);
  const colors = useTheme().colors as Colors;
  const styles = inputStyles({colors});
  const [isFocusStyle, setIsFocusStyle] = useState<ViewStyle | null>(null);
  const handleOnFocus = () => {
    setIsFocusStyle(styles.activeContainer);
  };
  const handleOnBlur = () => {
    setIsFocusStyle(null);
  };
  const handleOnChange = (text: string) => {
    phoneInput.current?.setState({number: text});
    if (text.length > 7) {
      const isValidNumber = phoneInput.current?.isValidNumber(text);
      isValidNumber &&
        (onChangeText(text, name, isValidNumber),
        setIsFocusStyle(styles.activeContainer));
      !isValidNumber && setIsFocusStyle(styles.errorContainer);
    } else {
      onChangeText(text, name, false);
    }
  };
  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={defaultValue}
        defaultCode={defaultCode || 'US'}
        renderDropdownImage={<DownArrowIcon />}
        codeTextStyle={styles.phoneInput}
        containerStyle={[
          styles.container,
          globalStyles.widthFull,
          {gap: rs(0), ...customPadding(0, 10, 0, 10)},
          isFocusStyle,
          style,
        ]}
        textContainerStyle={[
          styles.input,
          {backgroundColor: colors.transparent, paddingRight: rs(15)},
        ]}
        textInputStyle={styles.phoneInput}
        textInputProps={{
          onFocus: handleOnFocus,
          onBlur: handleOnBlur,
          ...inputProps,
        }}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        withDarkTheme
      />
    </View>
  );
};

export default PhoneNumberInput;
