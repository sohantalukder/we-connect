import React from 'react';
import CustomFlatList from '@components/custom-flatList/CustomFlatList';
import CallItem from '../components/CallItem';
import useCalls from '../hooks/useCalls.hook';
import {customPadding} from '@styles/global.style.asset';

const CallList = () => {
  const {list, isLoading, refreshing, onRefresh, onLoadMore, hasMore} =
    useCalls();
  return (
    <CustomFlatList
      data={list}
      isLoading={isLoading}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
      contentContainerStyle={{...customPadding(0, 0, 0, 0)}}
      renderItem={({index, item}) => <CallItem index={index} item={item} />}
    />
  );
};

export default CallList;
