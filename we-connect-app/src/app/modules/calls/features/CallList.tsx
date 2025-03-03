import React from 'react';
import CustomFlatList from '@components/custom-flatList/CustomFlatList';
import CallItem from '../components/CallItem';
import useCalls from '../hooks/useCalls.hook';

const CallList = () => {
  const {list, isLoading, refreshing, onRefresh, onLoadMore, hasMore} =
    useCalls();
  console.log({list});
  return (
    <CustomFlatList
      data={list}
      isLoading={isLoading}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
      renderItem={({index}) => <CallItem index={index} />}
    />
  );
};

export default CallList;
