import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const IncomingBoldCallIcon: React.FC<IconProps> = ({
  width = 16,
  height = 16,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fill={fill || colors.default1}
        d="M13.854 2.146a.5.5 0 010 .708L10.707 6h1.796a.5.5 0 110 1H9.5a.5.5 0 01-.5-.5v-3a.5.5 0 111 0v1.793l3.147-3.147a.5.5 0 01.707 0m-9.48-.026a1.75 1.75 0 012.196.886l.567 1.19a1.5 1.5 0 01-.249 1.658L5.572 7.291q.023.092.06.213c.086.28.226.65.445 1.025a4.6 4.6 0 00.848 1.046l1.877-.489a1.5 1.5 0 011.462.414l.775.809a1.75 1.75 0 01-.062 2.483l-.296.28c-1.126 1.063-2.88 1.29-4.135.247-.94-.782-2.068-1.88-2.918-3.213-.94-1.477-1.38-3.23-1.588-4.55-.237-1.506.72-2.83 2.071-3.337zm0 0l.176.468z"
      />
    </Svg>
  );
};
export default IncomingBoldCallIcon;
