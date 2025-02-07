import {Text} from 'react-native';
import React from 'react';
import MainHeader from '@components/header/MainHeader.c';
import Container from '@layouts/Container.layout';
import EmptyContent from '@components/empty-content/EmptyContent.component';

const CallsIndex = () => {
  return (
    <Container>
      <MainHeader title="Calls" />
      <Text>CallsIndex</Text>
      <EmptyContent
        text="No Data Found !"
        description="Sorry, the keyword you entered can't be found please check again or search with another keyword."
      />
    </Container>
  );
};

export default CallsIndex;
