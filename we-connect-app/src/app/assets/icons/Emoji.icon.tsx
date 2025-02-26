import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const EmojiIcon: React.FC<IconProps> = ({width = 20, height = 20, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M11.966 11.858a3.133 3.133 0 01-3.933 0 .834.834 0 10-1.067 1.284 4.733 4.733 0 006.067 0 .834.834 0 10-1.067-1.284zM7.499 9.166a.833.833 0 100-1.666.833.833 0 000 1.666zm5-1.666a.833.833 0 100 1.666.833.833 0 000-1.666zM10 1.667a8.333 8.333 0 100 16.666 8.333 8.333 0 000-16.666zm0 15a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.333z"
        fill={fill || colors.gray3}
      />
    </Svg>
  );
};
export default EmojiIcon;
