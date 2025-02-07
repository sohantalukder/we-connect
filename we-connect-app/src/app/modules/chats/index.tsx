import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';
import ChatsList from './features/ChatsList';
const ChatsIndex: React.FC = () => {
  return (
    <Container>
      <MainHeader title={'Chats'} />
      <ChatsList />
    </Container>
  );
};

export default ChatsIndex;
