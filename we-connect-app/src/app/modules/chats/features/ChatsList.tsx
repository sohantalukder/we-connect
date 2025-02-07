import {Text, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import WelcomeIllustration from '@illustrations/Welcome.illustration';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import config from '../../../../config';
import Button from '@components/button/button/Button.component';

const ChatsList: React.FC = () => {
  const colors = useTheme().colors as Colors;
  return (
    <FlatList
      data={[]}
      renderItem={() => <></>}
      contentContainerStyle={[
        globalStyles.centerView,
        {...customPadding(20, 20, 20, 20)},
      ]}
      ListEmptyComponent={
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
      }
    />
  );
};

export default ChatsList;
