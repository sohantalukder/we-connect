import {COMMON_STATE} from '@entity-models/redux/redux.types';
import {chatsStates} from '@states/allSelector.state';
import {getChatsList} from '@states/features/chats/chats.thunk';
import {useLayoutEffect} from 'react';
import {InteractionManager} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IChat} from '../interface';

const useChats = () => {
  const dispatch = useDispatch();
  const {list, isLoading, firstRender, refreshing, hasMore, page, perPage} =
    useSelector(chatsStates) as COMMON_STATE<IChat>;
  useLayoutEffect(() => {
    if (!firstRender) {
      InteractionManager.runAfterInteractions(() => {
        dispatch(getChatsList({page: 0, perPage: 50}) as any);
      });
    }
  }, [dispatch, firstRender]);
  const onRefresh = () => {
    dispatch(getChatsList({page: 0, perPage: 50}) as any);
  };
  const onLoadMore = () => {
    dispatch(getChatsList({page: page + 1, perPage: perPage}) as any);
  };
  return {
    list,
    isLoading,
    refreshing,
    onRefresh,
    onLoadMore,
    hasMore,
  };
};

export default useChats;
