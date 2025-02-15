import {
  COMMON_REDUCER,
  COMMON_STATE,
  PAYLOAD_ACTION,
} from '@entity-models/redux/redux.types';
import {createSlice} from '@reduxjs/toolkit';
import commonStates from '@states/commonState.state';
import sliceName from '@states/sliceName';
import {getChatsList} from './chats.thunk';
import commonReducers from '@states/commonReducer.state';

const initialState: COMMON_STATE<any> = {
  ...commonStates,
};

const collectionsSlice = createSlice({
  name: sliceName.chatsSlice,
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getChatsList.pending, commonReducers.isGetting)
      .addCase(
        getChatsList.fulfilled,
        (state, {payload}: PAYLOAD_ACTION<any>) =>
          commonReducers.isGettingSuccess(state, payload),
      )
      .addCase(getChatsList.rejected, commonReducers.isGettingError);
  },
  reducers: {
    clearAction: (state: COMMON_STATE<any>) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
  },
});

export const {clearAction}: COMMON_REDUCER<any> = collectionsSlice.actions;

export default collectionsSlice.reducer;
