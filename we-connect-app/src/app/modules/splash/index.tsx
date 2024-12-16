import React, {useLayoutEffect, useRef, useState} from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import {customPadding} from '@styles/global.style.asset';
import LogoBG from '@icons/LogoBG.icon';
import Logo from '@icons/Logo.icon';
import {
  Easing,
  Animated as ReactAnimated,
  StyleSheet,
  View,
} from 'react-native';
import rs from '@styles/responsiveSize.style.asset';
import Loader from '@icons/Loader.icon';
import {useNavigation} from '@react-navigation/native';
import {screens} from '@routes/routeName.routes';

const SplashLogo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const scale = useRef(new ReactAnimated.Value(0)).current;
  const scale2 = useRef(new ReactAnimated.Value(0)).current;

  useLayoutEffect(() => {
    if (isAnimating) {
      ReactAnimated.sequence([
        ReactAnimated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
        ReactAnimated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
      ]).start();
    }
    setTimeout(() => {
      ReactAnimated.timing(scale2, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }, 500);

    // Stop animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAnimating, scale, scale2]);

  const animatedStyle = {
    transform: [{scale}],
  };

  const animatedStyle2 = {
    transform: [{scale: scale2}],
  };

  return (
    <View style={styles.logoContainer}>
      <ReactAnimated.View style={animatedStyle}>
        <LogoBG />
      </ReactAnimated.View>
      <ReactAnimated.View style={[animatedStyle2, styles.logo]}>
        <Logo />
      </ReactAnimated.View>
    </View>
  );
};
const SplashLoader = () => {
  const spinAnim = useRef(new ReactAnimated.Value(0));
  const [showLoader, setShowLoader] = useState(false);
  const interpolateRotation = spinAnim.current?.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animatedStyle = {
    transform: [{rotate: interpolateRotation}],
  };
  useLayoutEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
      ReactAnimated.loop(
        ReactAnimated.timing(spinAnim.current, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }, 2000);
  }, []);
  return (
    showLoader && (
      <ReactAnimated.View style={[styles.loader, animatedStyle]}>
        <Loader />
      </ReactAnimated.View>
    )
  );
};
const SplashIndex: React.FC = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.letsIn as never);
    }, 3000);
  }, [navigation]);
  return (
    <SplashContainer containerStyle={{...customPadding(0, 20, 0, 20)}}>
      <SplashLogo />
      <SplashLoader />
    </SplashContainer>
  );
};

export default SplashIndex;

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: '92%',
    marginTop: '-15%',
  },
  logo: {position: 'absolute', alignSelf: 'center'},
  loader: {
    width: rs(60),
    height: rs(60),
    alignSelf: 'center',
  },
});
