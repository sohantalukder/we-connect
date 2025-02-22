import {Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import WelcomeIllustration from '@illustrations/Welcome.illustration';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import config from '../../../../../config';
import Button from '@components/button/button/Button.component';
import useChats from '../../hooks/useChats.hook';
import EmptyContent from '@components/empty-content/EmptyContent.component';
import ChatItem from '@modules/chats/components/ChatItem';

const ChatsList: React.FC = () => {
  const colors = useTheme().colors as Colors;
  const {list, isLoading, refreshing, onRefresh, onLoadMore, hasMore} =
    useChats();
  return (
    <FlatList
      data={list}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={({item, index}) => <ChatItem item={item} index={index} />}
      contentContainerStyle={[
        list.length === 0 && [
          globalStyles.centerView,
          {...customPadding(20, 0, 20, 0)},
        ],
      ]}
      keyboardDismissMode="on-drag"
      keyExtractor={(_item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      ListEmptyComponent={
        isLoading ? (
          <EmptyContent forLoading={isLoading} />
        ) : (
          <>
            <WelcomeIllustration />
            <Text
              style={[
                typographies(colors).heading2,
                {color: colors.primary, marginTop: rs(60)},
              ]}>
              Welcome! 👋
            </Text>
            <Text
              style={[
                typographies(colors).bodyXLargeMedium,
                {marginTop: rs(24)},
                globalStyles.textAlignCenter,
              ]}>{`${config.appName} connects you with family and friends. Start chatting now!`}</Text>
            <Button
              text="Start New Chat"
              wrapStyle={{marginTop: rs(30)}}
              borderRadius={30}
            />
          </>
        )
      }
      onEndReachedThreshold={0.5}
      onEndReached={onLoadMore}
      ListFooterComponent={
        hasMore ? <ActivityIndicator color={colors.primary} /> : null
      }
    />
  );
};

export default ChatsList;
