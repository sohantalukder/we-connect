import {Text} from 'react-native';
import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';

const CallsIndex = () => {
  return (
    <Container>
      <MainHeader title="Calls" />
      <Text>CallsIndex</Text>
    </Container>
  );
};

export default CallsIndex;
