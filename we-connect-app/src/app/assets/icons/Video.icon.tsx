import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const VideoIcon: React.FC<IconProps> = ({width = 28, height = 28, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.132 5.25h6.757c2.826 0 4.799 1.947 4.799 4.738v8.024c0 2.79-1.973 4.738-4.799 4.738H7.132c-2.826 0-4.799-1.947-4.799-4.738V9.988c0-2.79 1.973-4.738 4.799-4.738zm16.152 2.775a1.613 1.613 0 011.602.075c.489.307.78.84.78 1.423v8.955c0 .584-.291 1.116-.78 1.423a1.615 1.615 0 01-1.603.073l-1.728-.872a1.894 1.894 0 01-1.036-1.7v-6.805c0-.725.397-1.376 1.036-1.699l1.729-.873z"
        fill={fill ?? colors.default1}
      />
    </Svg>
  );
};
export default VideoIcon;
