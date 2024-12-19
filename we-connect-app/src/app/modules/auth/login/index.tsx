import React, {useState} from 'react';
import PhoneNumberInput from '@components/phone-number-input/PhoneNumberInput.c';
import CustomInput from '@components/text-input/CustomInput.c';
import Header from '@components/header/Header.component';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Logo from '@icons/Logo.icon';
import PasswordInput from '@components/text-input/PasswordInput.c';
import Button from '@components/button/button/Button.component';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useNavigation, useTheme} from '@react-navigation/native';
import {screens} from '@routes/routeName.routes';
import RadioActive from '@icons/CheckboxActive.icon';
import RadioInActive from '@icons/CheckboxInActive.icon';
import SplashContainer from '@layouts/SplashContainer.layout';
const RememberMe: React.FC<{colors: Colors}> = ({colors}) => {
  const [active, setActive] = useState<boolean>(false);
  const handlePress = () => {
    setActive(!active);
  };
  return (
    <Pressable onPress={handlePress} style={[globalStyles.rowBetween]}>
      {active ? <RadioActive /> : <RadioInActive />}
      <Text style={typographies(colors).bodyMediumSemibold}>Remember me</Text>
    </Pressable>
  );
};
interface Props {
  route: {params: {type: 'email' | 'phone'}};
}
const LoginIndex: React.FC<Props> = ({
  route: {
    params: {type},
  },
}) => {
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
            Login to Your Account
          </Text>
          {type === 'phone' ? (
            <PhoneNumberInput onChangeText={() => {}} />
          ) : (
            <CustomInput placeholder="Email" onChangeText={() => {}} />
          )}
          <PasswordInput
            wrapperStyle={{...customPadding(16)}}
            placeholder="Password"
            onChangeText={() => {}}
          />
          <View
            style={[
              globalStyles.rowBetween,
              globalStyles.widthFull,
              {...customPadding(16, 0, 16, 0)},
            ]}>
            <RememberMe colors={colors} />
            <Text
              style={typographies(colors).bodyMediumSemibold}
              onPress={() =>
                navigation.navigate(screens.forgotPassword as never)
              }>
              Forgot password
            </Text>
          </View>
          <Button text="Login" onPress={() => {}} />
          <Text
            style={[
              typographies(colors).bodyMediumRegular,
              {...customPadding(60, 0, 16, 0), color: colors.gray3},
            ]}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate(screens.signUp as never)}
              style={[
                typographies(colors).bodyMediumSemibold,
                {color: colors.primary},
              ]}>
              Sign up
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SplashContainer>
  );
};

export default LoginIndex;

const styles = StyleSheet.create({
  container: {
    ...customPadding(0, 24, 40, 24),
    justifyContent: 'flex-end',
    height: '100%',
    flex: 1,
  },
});
