import {Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Container from '@layouts/Container.layout';
import {globalStyles} from '@styles/global.style.asset';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import Loader from '@components/loader/Loader.c';
import {screens} from '@routes/routeName.routes';

const SetupComplete = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.home as never);
    }, 2000);
  }, [navigation]);
  return (
    <Container containerStyle={globalStyles.centerView} ph={30}>
      <Text style={[typographies(colors).heading4, {color: colors.primary}]}>
        Congratulations!
      </Text>
      <Text
        style={[
          typographies(colors).bodyLargeRegular,
          globalStyles.textAlignCenter,
          {marginTop: rs(16)},
        ]}>
        Your account is ready to use. You will be redirected to the Home page in
        a few seconds..
      </Text>
      <Loader style={{marginTop: rs(60)}} />
    </Container>
  );
};

export default SetupComplete;
