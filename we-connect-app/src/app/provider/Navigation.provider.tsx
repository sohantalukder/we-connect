import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import appColors from '@styles/colors.style.asset';
import BottomSheetIndex from '@components/bottom-sheet';

interface Props {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<Props> = ({children}) => {
  const colorScheme = useColorScheme();
  const theme = appColors[colorScheme === 'dark' ? 'dark' : 'light'];
  return (
    <NavigationContainer theme={theme}>
      {children}
      <BottomSheetIndex />
    </NavigationContainer>
  );
};

export default NavigationProvider;
