import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '@styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {SplashContainerProps} from '@layouts/interface';
import CustomStatusBar from '../components/status-bar/CustomStatusBar.component';

const SplashContainer: React.FC<SplashContainerProps> = ({
  children,
  containerStyle,
  barStyle,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={colors.transparent}
        showHeader={false}
        barStyle={barStyle ?? 'light-content'}
      />
      <View style={[styles(colors.default).container, containerStyle]}>
        {children}
      </View>
    </View>
  );
};
export default SplashContainer;

const styles = (bgColor: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
    },
  });
