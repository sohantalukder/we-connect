import {Text} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import MainHeader from '@components/header/MainHeader.c';

const StatusIndex = () => {
  return (
    <Container>
      <MainHeader title="Status" />
      <Text>CallsIndex</Text>
    </Container>
  );
};

export default StatusIndex;
