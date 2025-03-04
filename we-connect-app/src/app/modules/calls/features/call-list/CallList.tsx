import React from 'react';
import CustomFlatList from '@components/custom-flatList/CustomFlatList';
import CallItem from '../../components/CallItem';
import useCalls from '../../hooks/useCalls.hook';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {View} from 'react-native';
import IconButton from '@components/button/icon-button/IconButton.component';
import CallBoldIcon from '@icons/CallBold.icon';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {screens} from '@routes/routeName.routes';
import callListStyle from '@modules/calls/styles/callList.style';

const CallList = () => {
  const {list, isLoading, refreshing, onRefresh, onLoadMore, hasMore} =
    useCalls();
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  const style = callListStyle(colors);
  return (
    <View style={globalStyles.flex1}>
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
      {list.length > 0 && (
        <IconButton
          bgColor={colors.primary}
          style={style.button}
          onPress={() => navigation.navigate(screens.selectContact as never)}
          icon={<CallBoldIcon fill={colors.white} />}
        />
      )}
    </View>
  );
};

export default CallList;
