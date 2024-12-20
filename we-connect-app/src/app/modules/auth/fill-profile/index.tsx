import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import Header from '@components/header/Header.component';
import Button from '@components/button/button/Button.component';
import rs from '@styles/responsiveSize.style.asset';
import AvatarImage from '@images/AvatarPlaceholder.image';
import EditIcon from '@icons/Edit.icon';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import {globalStyles, customMargin} from '@styles/global.style.asset';
import CustomInput from '@components/text-input/CustomInput.c';
const ImageUpload = () => {
  return (
    <View style={{height: rs(200), width: rs(200)}}>
      <AvatarImage />
      <RippleButton borderRadius={rs(10)}>
        <View style={{position: `${'absolute'}`, bottom: rs(0), right: rs(15)}}>
          <EditIcon />
        </View>
      </RippleButton>
    </View>
  );
};
const FillProfileIndex = () => {
  return (
    <SplashContainer showHeader={true}>
      <Header text="Fill Your Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          globalStyles.alignCenter,
          {...customMargin(30, 20, 0, 20)},
        ]}>
        <ImageUpload />
        <View
          style={[globalStyles.widthFull, {marginTop: rs(35), gap: rs(16)}]}>
          <CustomInput onChangeText={() => {}} placeholder="Full Name" />
        </View>
      </ScrollView>
    </SplashContainer>
  );
};

export default FillProfileIndex;
