import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const AttachmentIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.066 10.35l-5.15 5.158a3.542 3.542 0 01-5-5l6.666-6.666a2.142 2.142 0 012.95 0 2.1 2.1 0 010 2.95l-5.75 5.741a.638.638 0 01-.933-.867L12.124 7.4a.837.837 0 10-1.183-1.183L6.666 10.5a2.283 2.283 0 000 3.242 2.35 2.35 0 003.241 0l5.742-5.75a3.75 3.75 0 00-5.3-5.3L3.682 9.358a5.208 5.208 0 007.409 7.308l5.158-5.15a.838.838 0 00-1.183-1.183v.017z"
        fill={fill || colors.gray3}
      />
    </Svg>
  );
};
export default AttachmentIcon;
