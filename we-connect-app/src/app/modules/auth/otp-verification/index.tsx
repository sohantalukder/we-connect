import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import Header from '@components/header/Header.component';
import {Colors} from '@styles/colors.style.asset';
import {useNavigation, useTheme} from '@react-navigation/native';
import maskString from '@helper/utilities/maskString';
import {typographies} from '@styles/typographies.style.asset';
import {customMargin, globalStyles} from '@styles/global.style.asset';
import OTPInput from '@components/text-input/otp-input/OtpInput.component';
import {screens} from '@routes/routeName.routes';
import Button from '@components/button/button/Button.component';
const ResendOtp = () => {
  const colors = useTheme().colors as Colors;
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer === 0 ? 0 : prevTimer - 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View style={{...customMargin(60)}}>
      {timer === 0 ? (
        <Button text="Resend code" />
      ) : (
        <Text
          style={[
            typographies(colors).bodyXLargeMedium,
            globalStyles.textAlignCenter,
          ]}>
          Resend code in{' '}
          <Text
            style={[
              typographies(colors).bodyXLargeSemibold,
              {color: colors.primary},
            ]}>
            {timer}
          </Text>{' '}
          seconds
        </Text>
      )}
    </View>
  );
};
const OtpVerificationIndex = () => {
  const colors = useTheme().colors as Colors;
  const phoneNumber = '+8801865748726';
  const navigation = useNavigation();
  const handleVerifyOtp = (otp: string) => {
    console.log('Completed OTP Verification', otp);
    navigation.navigate(screens.fillProfile as never);
  };
  return (
    <SplashContainer showHeader={true}>
      <Header text="OTP Code Verification" />
      <View style={[globalStyles.flex1, {...customMargin(100, 20, 0, 20)}]}>
        <Text
          style={[
            typographies(colors).bodyXLargeMedium,
            globalStyles.textAlignCenter,
          ]}>
          Code has been send to{' '}
          <Text style={typographies(colors).bodyXLargeBold}>
            {maskString(phoneNumber)}
          </Text>
        </Text>
        <OTPInput
          length={6}
          callback={otp => handleVerifyOtp(otp)}
          style={{...customMargin(20)}}
        />
        <ResendOtp />
      </View>
    </SplashContainer>
  );
};

export default OtpVerificationIndex;
