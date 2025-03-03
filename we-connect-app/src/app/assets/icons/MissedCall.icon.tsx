import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const MissedCallIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M21.328 2.75l-6 6M15.328 2.75l6 6" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.701 16.299C.802 9.4 1.783 6.241 2.511 5.222c.093-.163 2.395-3.61 4.864-1.588 6.126 5.045-1.63 4.332 3.515 9.477 5.144 5.144 4.43-2.611 9.476 3.514 2.022 2.469-1.425 4.77-1.588 4.864-1.02.728-4.178 1.709-11.077-5.19z"
        />
      </G>
    </Svg>
  );
};
export default MissedCallIcon;
