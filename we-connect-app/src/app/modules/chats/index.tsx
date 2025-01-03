import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';
import RNPhoneNumberInput from '@components/rn-phone-number-input';
import PhoneNumberInput from '@components/phone-number-input/PhoneNumberInput.c';
const ChatsIndex = () => {
  return (
    <Container>
      <MainHeader title={'Chats'} />
      <PhoneNumberInput onChangeText={() => {}} />
      <RNPhoneNumberInput />
    </Container>
  );
};

export default ChatsIndex;
