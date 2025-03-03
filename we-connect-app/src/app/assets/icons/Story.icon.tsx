import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const StoryIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color={fill || colors.default1}>
        <Path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 01-3.277-1.754m0-15.492A11.3 11.3 0 019 2.5m-7 7.746a9.6 9.6 0 011.296-3.305M2 13.754a9.6 9.6 0 001.296 3.305" />
        <Path d="M8 16.5c2.073-2.198 5.905-2.301 8 0m-1.782-6.75c0 1.243-.996 2.25-2.226 2.25s-2.225-1.007-2.225-2.25.996-2.25 2.226-2.25 2.225 1.007 2.225 2.25" />
      </G>
    </Svg>
  );
};
export default StoryIcon;
