import {COMMON_STATE} from '@entity-models/redux/redux.types';
import {callsStates} from '@states/allSelector.state';
import {getCallsList} from '@states/features/calls/calls.thunk';
import {useLayoutEffect} from 'react';
import {InteractionManager} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICallEntry} from '../interface';

const useCalls = () => {
  const dispatch = useDispatch();
  const {list, isLoading, firstRender, refreshing, hasMore, page, perPage} =
    useSelector(callsStates) as COMMON_STATE<ICallEntry>;
  console.log(list);
  useLayoutEffect(() => {
    if (!firstRender) {
      InteractionManager.runAfterInteractions(() => {
        dispatch(getCallsList({page: 0, perPage: 50}) as any);
      });
    }
  }, [dispatch, firstRender]);
  const onRefresh = () => {
    dispatch(getCallsList({page: 0, perPage: 50}) as any);
  };
  const onLoadMore = () => {
    dispatch(getCallsList({page: page + 1, perPage: perPage}) as any);
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

export default useCalls;
