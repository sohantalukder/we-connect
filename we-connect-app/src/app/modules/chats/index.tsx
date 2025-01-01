import {Text} from 'react-native';
import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';
import mobileNumberConstant from '@constants/mobileNumberConstant';
const ChatsIndex = () => {
  return (
    <Container>
      <MainHeader title={'Chats'} />
      <Text>ChatsIndex</Text>
      <Text style={{color: 'white', fontSize: 300}}>
        {mobileNumberConstant[0].icon}
      </Text>
    </Container>
  );
};

export default ChatsIndex;
