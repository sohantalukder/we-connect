import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '@styles/global.style.asset';
interface Props {
  style?: StyleProp<ViewStyle>;
}
const PlaceholderImage: React.FC<Props> = ({style}) => {
  const colors = useTheme().colors as Colors;
  return (
    <View
      style={[
        globalStyles.widthFull,
        globalStyles.heightFull,
        globalStyles.alignJustifyCenter,
        {backgroundColor: colors.placeHolderBg},
        style,
      ]}>
      <Svg width={'45%'} height={'45%'} viewBox="0 0 16 16" fill="none">
        <Path
          fill={colors.placeHolder}
          d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2zm1 9v1a1 1 0 001 1h12a1 1 0 001-1V9.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062zm5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0"
        />
      </Svg>
    </View>
  );
};
export default PlaceholderImage;
