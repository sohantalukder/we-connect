import React from 'react';
import IconButton from '../button/icon-button/IconButton.component';
import LeftArrowIcon from '../../assets/icons/LeftArrow.icon.asset';
import {useNavigation} from '@react-navigation/native';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';
interface _props {
  style?: StyleProp<ViewStyle>;
  rightComponent?: React.ReactElement;
  text?: string;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  iconFill?: string;
  leftControl?: () => void;
  showLeft?: boolean;
  LeftIcon?: React.FC<_iconProps>;
}
const Header: React.FC<_props> = ({
  style,
  text,
  rightComponent,
  iconStyle,
  textStyle,
  iconFill = customTheme.colors.white,
  leftControl,
  showLeft = true,
  LeftIcon = LeftArrowIcon,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        globalStyles.rowBetween,
        {...customPadding(8, 8, 8, 8)},
        globalStyles.widthFull,
        style,
      ]}>
      {showLeft && (
        <IconButton
          style={iconStyle}
          icon={<LeftIcon fill={iconFill} />}
          onPress={() =>
            leftControl
              ? leftControl()
              : navigation.canGoBack()
              ? navigation.goBack()
              : undefined
          }
        />
      )}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      <View>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    ...typographies.titleLarge,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    zIndex: -1,
  },
});
