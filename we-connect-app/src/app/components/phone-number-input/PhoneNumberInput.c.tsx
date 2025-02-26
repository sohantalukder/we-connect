import {useColorScheme, View, ViewStyle} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {inputStyles} from '@components/text-input/styles/input.styles';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import DownArrowIcon from '@icons/DownArrow.icon';
import rs from '@styles/responsiveSize.style.asset';
import {PhoneNumberInputProps} from '@components/text-input/interface/inputInterface';
import {getCountry} from 'react-native-localize';
import {CountryCode} from '@components/text-input/interface/countryCode';
import RNPhoneInput, {RNPhoneInputRef} from 'rn-phone-input-field';
const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChangeText,
  defaultCode = getCountry(),
  defaultValue,
  inputProps,
  name,
  style,
  placeholder = 'Phone Number',
}) => {
  const phoneInput = useRef<RNPhoneInputRef>(null);
  const colors = useTheme().colors as Colors;
  const colorScheme = useColorScheme();
  const styles = inputStyles({colors, mode: colorScheme});
  const [isFocusStyle, setIsFocusStyle] = useState<ViewStyle | null>(null);
  const handleOnFocus = () => {
    setIsFocusStyle(styles.activeContainer);
  };
  const handleOnBlur = () => {
    setIsFocusStyle(null);
  };
  const handleOnChange = (text: string) => {
    phoneInput.current?.onChangeText({number: text});
    setIsFocusStyle(styles.activeContainer);
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
    <View style={globalStyles.widthFull}>
      <RNPhoneInput
        ref={phoneInput}
        defaultValue={defaultValue}
        defaultCountry={(defaultCode as unknown as CountryCode) || 'US'}
        downArrowIcon={<DownArrowIcon />}
        codeTextStyle={styles.phoneInput}
        containerStyle={[
          styles.container,
          {gap: rs(5), ...customPadding(10, 16, 10, 16)},
          isFocusStyle,
          style,
        ]}
        darkMode={true}
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
      />
    </View>
  );
};

export default PhoneNumberInput;
