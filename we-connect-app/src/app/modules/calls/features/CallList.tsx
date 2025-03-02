import React from 'react';
import CustomFlatList from '@components/custom-flatList/CustomFlatList';
import CallItem from '../components/CallItem';

const CallList = () => {
  return (
    <CustomFlatList
      data={new Array(20).fill('')}
      renderItem={({index}) => <CallItem index={index} />}
    />
  );
};

export default CallList;
