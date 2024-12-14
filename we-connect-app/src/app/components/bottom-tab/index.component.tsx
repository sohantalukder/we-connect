import React from 'react';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../routes/routeName.routes';
import BottomTabBarIcon from './BottomTabBarIcon.routes';
import {_bottomTabInterface} from './interface';
import {customPadding} from '../../assets/styles/global.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {bottomTabDropdown} from '../../assets/constants/bottomTab.dropdown';
interface types {
  onClick?: Function;
}
const Tab = createBottomTabNavigator();

const BottomTab: React.FC<types> = () => {
  const renderTabs = () => {
    const view: any = [];
    bottomTabDropdown.map((item: _bottomTabInterface, index: number) => {
      view.push(
        <Tab.Screen
          key={index}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <BottomTabBarIcon
                name={item.name}
                Icon={item.Icon}
                focused={focused}
              />
            ),
            lazy: true,
          }}
          name={item.route as string}
          component={item.Component}
        />,
      );
    });
    return view;
  };
  return (
    <Tab.Navigator
      initialRouteName={screens.dashboard}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: customTheme.colors.primary,
        tabBarInactiveTintColor: customTheme.colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: customTheme.colors.elevation8,
          borderTopWidth: 1,
          alignItems: 'center',
          ...customPadding(0, 20, 10, 20),
          height: rs(85),
          backgroundColor: customTheme.colors.surface_dark,
        },
      }}>
      {renderTabs()}
    </Tab.Navigator>
  );
};
export default BottomTab;
