import {Text} from 'react-native';
import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';

const ChatsIndex = () => {
  return (
    <Container>
      <MainHeader title={'Chats'} />
      <Text>ChatsIndex</Text>
    </Container>
  );
};

export default ChatsIndex;
