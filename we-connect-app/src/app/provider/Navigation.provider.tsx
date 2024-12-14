import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import appColors from '@styles/colors.style.asset';

interface Props {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<Props> = ({children}) => {
  const colorScheme = useColorScheme();
  const theme: Theme = appColors[colorScheme === 'dark' ? 'dark' : 'light'];
  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};

export default NavigationProvider;
