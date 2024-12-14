import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {globalStyles} from '../assets/styles/global.style.asset';
import configStore from '../states/store';

interface _props {
  children: React.ReactNode;
}
const MainProvider: React.FC<_props> = ({children}) => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
        <GestureHandlerRootView style={globalStyles.flex1}>
          <NavigationContainer>{children}</NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainProvider;
