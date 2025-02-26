import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {ChatDetailsProps} from '@modules/chats/interface';
import IconButton from '@components/button/icon-button/IconButton.component';
import CallIcon from '@icons/Call.icon';
import {globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import MoreCircleIcon from '@icons/MoreCircle.icon';
import VideoIcon from '@icons/Video.icon';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import CustomInput from '@components/text-input/CustomInput.c';
import CameraIcon from '@icons/Camera.icon';
import RecorderIcon from '@icons/Recorder.icon';
import EmojiIcon from '@icons/Emoji.icon';
import AttachmentIcon from '@icons/Attachment.icon';
import {statusBar} from '@styles/properties.asset';
const ChatOptions = () => {
  const colors = useTheme().colors as Colors;
  return (
    <View style={[globalStyles.flexRow, {gap: rs(0)}]}>
      <IconButton icon={<CallIcon fill={colors.white} />} />
      <IconButton icon={<VideoIcon fill={colors.white} />} />
      <IconButton icon={<MoreCircleIcon fill={colors.white} />} />
    </View>
  );
};
const Footer = () => {
  const colors = useTheme().colors as Colors;
  return (
    <View
      style={[
        globalStyles.flexRow,
        {gap: rs(10), padding: rs(20), paddingBottom: rs(40)},
      ]}>
      <CustomInput
        onChangeText={() => {}}
        placeholder="Type a message"
        leftIcon={<EmojiIcon />}
        rightIcon={
          <View style={globalStyles.flexRow}>
            <AttachmentIcon />
            <CameraIcon height={20} width={20} fill={colors.gray3} />
          </View>
        }
      />
      <IconButton
        bgColor={colors.primary}
        icon={<RecorderIcon fill={colors.white} />}
      />
    </View>
  );
};
const ChatDetails: React.FC<ChatDetailsProps> = ({
  route: {
    params: {item},
  },
}) => {
  const {name} = item;
  const colors = useTheme().colors as Colors;
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text={name}
        iconFill={colors.white}
        textStyle={{color: colors.white}}
        rightComponent={<ChatOptions />}
        style={{
          backgroundColor: colors.primary,
          paddingBottom: rs(10),
        }}
      />
      <FlatList
        data={new Array(20).fill('')}
        renderItem={() => (
          <Text style={typographies(colors).bodyLargeBold}>Hello</Text>
        )}
      />
      <Footer />
    </Container>
  );
};

export default ChatDetails;
