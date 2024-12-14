import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from './routeName.routes';
import basicRoutes from './modules/basic.routes';
import {_routeProps} from '../types/common.types';

const RouterIndex = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screens.splash}>
      {basicRoutes.map((route: _routeProps, index: number) => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};
export default RouterIndex;
