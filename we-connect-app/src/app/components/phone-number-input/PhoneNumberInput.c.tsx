import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberInput = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  return (
    <PhoneInput
      ref={phoneInput}
      defaultValue={value}
      defaultCode="DM"
      layout="first"
      countryPickerProps={{withAlphaFilter: true}}
      onChangeText={text => {
        setValue(text);
      }}
      onChangeFormattedText={text => {
        setFormattedValue(text);
      }}
      withDarkTheme
      autoFocus
    />
  );
};

export default PhoneNumberInput;
