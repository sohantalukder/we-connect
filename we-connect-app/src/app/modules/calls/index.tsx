import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';
import CallList from './features/CallList';

const CallsIndex = () => {
  return (
    <Container>
      <MainHeader title="Calls" />
      <CallList />
    </Container>
  );
};

export default CallsIndex;
