import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {statusBar} from '@styles/properties.asset';
import {
  customPadding,
  globalStyles,
  themedGlobalStyles,
} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import IconButton from '@components/button/icon-button/IconButton.component';
import MoreCircleIcon from '@icons/MoreCircle.icon';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import {typographies} from '@styles/typographies.style.asset';
import ImagePreview from '@components/image-preview/Index.component';
import CallBoldIcon from '@icons/CallBold.icon';
import VideoIcon from '@icons/Video.icon';
import IncomingBoldCallIcon from '@icons/IncomingBoldCall.icon';
import MessageBoldIcon from '@icons/MessageBold.icon';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import NotificationIcon from '@icons/Notification.icon';
const Options = () => {
  const colors = useTheme().colors as Colors;
  const openDropdown = () => {
    global.showDropMenu({
      show: true,
      children: (
        <>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>
                Remove from log
              </Text>
            </View>
          </RippleButton>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>Block</Text>
            </View>
          </RippleButton>
        </>
      ),
      top: 65,
      containerStyle: {
        ...customPadding(15, 0, 15),
      },
    });
  };
  return (
    <View style={[globalStyles.flexRow, {gap: rs(0)}]}>
      <IconButton
        icon={<MoreCircleIcon fill={colors.white} />}
        onPress={openDropdown}
      />
    </View>
  );
};
const CallInfo = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text={'Call info'}
        iconFill={colors.white}
        textStyle={{color: colors.white}}
        rightComponent={<Options />}
        style={{
          backgroundColor: colors.primary,
          ...customPadding(0, 5, 10, 5),
        }}
      />
      <View style={[{...customPadding(24, 24, 20, 24)}]}>
        <View
          style={[
            globalStyles.flexShrink1,
            globalStyles.alignCenter,
            {gap: rs(10)},
          ]}>
          <View style={{width: rs(60), height: rs(60)}}>
            <ImagePreview
              borderRadius={500}
              source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            />
          </View>
          <View
            style={[
              globalStyles.flexShrink1,
              globalStyles.alignCenter,
              {gap: rs(2)},
            ]}>
            <Text style={[typographies(colors).heading5]} numberOfLines={2}>
              Md. Sohan Talukder Akash
            </Text>
            <Text style={typographies(colors).bodyLargeMedium}>
              +1-202-555-0171
            </Text>
          </View>
        </View>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.activityCenter,
            {...customPadding(20), gap: rs(16)},
          ]}>
          <IconButton
            bgColor={hexOpacityToColor(colors.primary, 0.2)}
            icon={
              <MessageBoldIcon fill={colors.primary} height={24} width={24} />
            }
          />
          <IconButton
            bgColor={hexOpacityToColor(colors.primary, 0.2)}
            icon={<CallBoldIcon fill={colors.primary} height={24} width={24} />}
          />
          <IconButton
            bgColor={hexOpacityToColor(colors.primary, 0.2)}
            icon={<VideoIcon fill={colors.primary} height={24} width={24} />}
          />
          <IconButton
            bgColor={hexOpacityToColor(colors.primary, 0.2)}
            icon={
              <NotificationIcon fill={colors.primary} height={24} width={24} />
            }
          />
        </View>
      </View>
      <View
        style={[
          themedGlobalStyles(colors).divider,
          globalStyles.alignCenter,
          {marginHorizontal: rs(20), width: rs('wf') - rs(40)},
        ]}
      />
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{...customPadding(24, 24, 20, 24)}}>
        <View style={{marginBottom: rs(10)}}>
          <Text style={typographies(colors).bodyLargeSemibold}>
            Yesterday, December 21, 2025
          </Text>
        </View>
        <View
          style={[
            globalStyles.rowBetweenWithoutFlex,
            {...customPadding(10, 0, 10)},
          ]}>
          <View style={[globalStyles.flexRow]}>
            <IncomingBoldCallIcon
              height={32}
              width={32}
              fill={colors.success1}
            />
            <View style={{gap: rs(4.1)}}>
              <Text style={typographies(colors).heading6}>Incoming</Text>
              <Text style={typographies(colors).bodyMediumMedium}>
                10.40 PM
              </Text>
            </View>
          </View>
          <View>
            <Text style={typographies(colors).bodyLargeSemibold}>
              05:47 mins
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default CallInfo;
