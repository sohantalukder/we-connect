import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import LetsInIllustration from '@illustrations/LetsIn.illustration';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import Button from '@components/button/button/Button.component';
import {socialLoginOptions} from './constant/lestIn.constant';
import rs from '@styles/responsiveSize.style.asset';
import {globalStyles, themedGlobalStyles} from '@styles/global.style.asset';
import letsInStyles from './styles/styles';
import {screens} from '@routes/routeName.routes';

const LetsInIndex: React.FC = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation() as any;
  return (
    <Container ph={20}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: rs(20)}}>
        <View style={globalStyles.alignJustifyCenter}>
          <LetsInIllustration />
        </View>
        <Text style={[typographies(colors).heading1, letsInStyles.textCenter]}>
          Let's you in
        </Text>
        <View style={{gap: rs(16), paddingVertical: rs(24)}}>
          {socialLoginOptions.map((option, index) => (
            <Button
              key={index}
              icon={<option.Icon />}
              variant="outline"
              onPress={() =>
                index === 2
                  ? navigation.navigate(screens.login as never, {type: 'email'})
                  : {}
              }
              text={option.text}
            />
          ))}
        </View>
        <View style={letsInStyles.orContainer}>
          <View
            style={[themedGlobalStyles(colors).divider, letsInStyles.width42]}
          />
          <Text style={typographies(colors).bodyXLargeSemibold}>or</Text>
          <View
            style={[themedGlobalStyles(colors).divider, letsInStyles.width42]}
          />
        </View>
        <Button
          wrapStyle={{marginVertical: rs(24)}}
          onPress={() =>
            navigation.navigate(screens.login as never, {type: 'phone'})
          }
          text="Sign in with Phone Number"
        />
        <Text
          style={[
            typographies(colors).bodyMediumRegular,
            letsInStyles.textCenter,
            {gap: rs(0)},
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
    </Container>
  );
};

export default LetsInIndex;
