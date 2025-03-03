import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const RecorderIcon: React.FC<IconProps> = ({width = 22, height = 22, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.175 15.217h-.35c-2.403 0-4.351-1.924-4.351-4.297V6.297C7.474 3.924 9.422 2 11.825 2h.35c2.403 0 4.352 1.924 4.352 4.297v4.623c0 2.373-1.949 4.297-4.352 4.297zm6.388-4.434c0-.53.434-.957.968-.957.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0112 22a.962.962 0 01-.968-.957v-1.925C6.799 18.64 3.5 15.087 3.5 10.783c0-.53.434-.957.969-.957.534 0 .968.428.968.957 0 3.573 2.944 6.48 6.564 6.48 3.618 0 6.562-2.907 6.562-6.48z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};
export default RecorderIcon;
