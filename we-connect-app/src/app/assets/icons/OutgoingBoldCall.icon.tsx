import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const OutgoingBoldCallIcon: React.FC<IconProps> = ({
  width = 16,
  height = 16,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fill={fill || colors.default1}
        d="M10.5 2a.5.5 0 000 1h1.793L9.147 6.147a.5.5 0 10.707.707L13 3.707V5.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM6.57 3.006a1.75 1.75 0 00-2.196-.886l-.263.099c-1.35.507-2.308 1.83-2.07 3.336.207 1.32.646 3.074 1.587 4.55.85 1.334 1.978 2.432 2.918 3.214 1.255 1.043 3.009.816 4.135-.247l.296-.28a1.75 1.75 0 00.062-2.483l-.775-.81a1.5 1.5 0 00-1.462-.413l-1.877.49a4.6 4.6 0 01-.848-1.046 5 5 0 01-.505-1.24l1.316-1.436a1.5 1.5 0 00.249-1.658z"
      />
    </Svg>
  );
};
export default OutgoingBoldCallIcon;
