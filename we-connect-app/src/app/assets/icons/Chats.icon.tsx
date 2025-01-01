import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const ChatsIcon: React.FC<IconProps> = ({width = 22, height = 22, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        clipRule="evenodd"
        d="M18.071 18.07c-3.056 3.056-7.581 3.717-11.285 2.004-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.158-3.433.391-.767-.768.384-2.246.384-3.44 0-.427-.17-.867-.39-1.415C.212 11.51.873 6.982 3.93 3.927c3.902-3.903 10.24-3.903 14.141 0 3.909 3.908 3.902 10.241 0 14.143z"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.94 11.413h.008M10.93 11.413h.01M6.921 11.413h.01"
        stroke={fill || colors.default1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default ChatsIcon;
