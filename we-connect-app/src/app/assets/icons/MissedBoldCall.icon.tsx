import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const MissedBoldCallIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.337 5.918l2.404-2.413a.883.883 0 00.26-.627.883.883 0 00-.26-.627.903.903 0 00-1.249 0L18.09 4.664l-2.405-2.413a.903.903 0 00-1.249 0 .887.887 0 000 1.254l2.404 2.413-2.404 2.412a.887.887 0 000 1.255.903.903 0 001.25 0l2.404-2.414 2.403 2.414a.878.878 0 001.249 0 .883.883 0 00.26-.628.883.883 0 00-.26-.627l-2.404-2.412z"
        fill={fill || colors.default1}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.032 12.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.993 7.644 2.762 5.172 3.074 4.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};
export default MissedBoldCallIcon;
