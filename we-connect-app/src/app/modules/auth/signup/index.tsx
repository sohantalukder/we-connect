import React from 'react';
import PhoneNumberInput from '@components/phone-number-input/PhoneNumberInput.c';
import Header from '@components/header/Header.component';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Logo from '@icons/Logo.icon';
import PasswordInput from '@components/text-input/PasswordInput.c';
import Button from '@components/button/button/Button.component';
import {
  customPadding,
  customMargin,
  globalStyles,
} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useNavigation, useTheme} from '@react-navigation/native';
import {screens} from '@routes/routeName.routes';
import SplashContainer from '@layouts/SplashContainer.layout';

const SignUpIndex: React.FC = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  return (
    <SplashContainer showHeader={true}>
      <Header />
      <KeyboardAvoidingView style={globalStyles.flex1} behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          keyboardDismissMode="on-drag"
          contentContainerStyle={[globalStyles.alignCenter, styles.container]}>
          <View style={{...customPadding(0, 0, 40, 0)}}>
            <Logo />
          </View>
          <Text
            style={[
              typographies(colors).heading3,
              {...customPadding(0, 0, 40)},
            ]}>
            Create New Account
          </Text>
          <PhoneNumberInput onChangeText={() => {}} />
          <PasswordInput
            wrapperStyle={{...customPadding(16)}}
            placeholder="Password"
            onChangeText={() => {}}
          />

          <Button
            text="Sign up"
            wrapStyle={{...customMargin(16)}}
            onPress={() => {}}
          />
          <Text
            style={[
              typographies(colors).bodyMediumRegular,
              {...customPadding(60, 0, 16, 0), color: colors.gray3},
            ]}>
            Have an account?{' '}
            <Text
              onPress={() => navigation.navigate(screens.login as never)}
              style={[
                typographies(colors).bodyMediumSemibold,
                {color: colors.primary},
              ]}>
              Login
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SplashContainer>
  );
};

export default SignUpIndex;

const styles = StyleSheet.create({
  container: {
    ...customPadding(0, 24, 40, 24),
    justifyContent: 'flex-end',
    height: '100%',
    flex: 1,
  },
});
