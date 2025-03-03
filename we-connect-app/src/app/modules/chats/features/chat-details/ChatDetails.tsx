import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {ChatDetailsProps} from '@modules/chats/interface';
import IconButton from '@components/button/icon-button/IconButton.component';
import {customPadding, globalStyles} from '@styles/global.style.asset';
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
import CustomFlatList from '@components/custom-flatList/CustomFlatList';
import CallBoldIcon from '@icons/CallBold.icon';
import GalleryFillIcon from '@icons/GalleryFill.icon';
import RippleButton from '@components/button/ripple/CustomRipple.c';

const ChatOptions = () => {
  const colors = useTheme().colors as Colors;
  return (
    <View style={[globalStyles.flexRow, {gap: rs(0)}]}>
      <IconButton icon={<CallBoldIcon fill={colors.white} />} />
      <IconButton
        icon={<VideoIcon fill={colors.white} width={24} height={24} />}
      />
      <IconButton icon={<MoreCircleIcon fill={colors.white} />} />
    </View>
  );
};

const Footer = () => {
  const colors = useTheme().colors as Colors;
  const array = [
    {icon: CallBoldIcon, label: 'Document'},
    {icon: CameraIcon, label: 'Camera'},
    {icon: GalleryFillIcon, label: 'Gallery'},
    {icon: CallBoldIcon, label: 'Audio'},
    {icon: CallBoldIcon, label: 'Location'},
    {icon: CallBoldIcon, label: 'Contact'},
  ];
  const handleAttachment = () => {
    global.showDropMenu({
      show: true,
      children: (
        <View
          style={[
            globalStyles.alignJustifyCenter,
            {
              paddingVertical: rs(24),
              width: rs('wf') - 40,
            },
          ]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.alignJustifyCenter,

              {
                rowGap: rs(24),
                columnGap: rs(12),
                width: rs('wf') - 40,
                flexWrap: 'wrap',
              },
            ]}>
            {array.map(item => (
              <RippleButton>
                <View
                  style={[
                    globalStyles.alignCenter,
                    {...customPadding(0, 10, 0, 10), gap: rs(8)},
                  ]}>
                  <IconButton
                    style={{width: rs(72), height: rs(72)}}
                    icon={<item.icon fill={colors.white} />}
                    bgColor={colors.primary}
                  />
                  <Text style={typographies(colors).bodyLargeSemibold}>
                    {item.label}
                  </Text>
                </View>
              </RippleButton>
            ))}
          </View>
        </View>
      ),
      top: rs('hf') / 2.1,
      containerStyle: {
        width: rs('wf') - 40,
        borderRadius: rs(40),
      },
    });
  };
  return (
    <View
      style={[
        globalStyles.flexRow,
        {gap: rs(10), ...customPadding(5, 20, 40, 20)},
      ]}>
      <CustomInput
        onChangeText={() => {}}
        placeholder="Type a message"
        leftIcon={<EmojiIcon />}
        rightIcon={
          <View style={globalStyles.flexRow}>
            <Pressable onPress={handleAttachment}>
              <AttachmentIcon />
            </Pressable>
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
          ...customPadding(0, 5, 10, 5),
        }}
      />
      <CustomFlatList
        inverted
        data={Array.from({length: 20}, (_, i) => ({id: i}))}
        renderItem={({index}) => (
          <View
            style={[
              globalStyles.widthFull,
              {
                alignItems: index % 2 !== 0 ? 'flex-start' : 'flex-end',
              },
            ]}>
            <View
              style={{
                maxWidth: '85%',
                borderRadius: 20,
                ...customPadding(16, 20, 16, 20),
                borderBottomRightRadius: index % 2 === 0 ? 8 : 20,
                borderBottomLeftRadius: index % 2 !== 0 ? 8 : 20,
                backgroundColor:
                  index % 2 === 0 ? colors.primary : colors.gray7,
              }}>
              <Text
                style={[
                  typographies(colors).bodyMediumMedium,
                  {color: index % 2 === 0 ? colors.white : colors.default1},
                ]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, aut. Commodi dolore sit beatae nostrum amet voluptas
                harum, eum alias.
              </Text>
              <Text>09:41</Text>
            </View>
          </View>
        )}
      />
      <Footer />
    </Container>
  );
};

export default ChatDetails;
