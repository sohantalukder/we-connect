import {View, Text} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import PhoneNumberInput from '@components/phone-number-input/PhoneNumberInput.c';
import CustomInput from '@components/text-input/CustomInput.c';
interface Props {
  route: {params: {type: string}};
}
const LoginIndex: React.FC<Props> = ({
  route: {
    params: {type},
  },
}) => {
  console.log(type);
  return (
    <Container>
      <PhoneNumberInput />
      <CustomInput onChangeText={() => {}} />
    </Container>
  );
};

export default LoginIndex;
