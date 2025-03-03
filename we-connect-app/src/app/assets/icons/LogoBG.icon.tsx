import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';

const LogoBG: React.FC<IconProps> = ({width = rs(367), height = rs(373)}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 367 373" fill="none">
      <Circle cx={104} cy={366} r={7} fill="#338AF7" />
      <Circle cx={278} cy={348} r={22} fill="#338AF7" />
      <Circle cx={170} cy={307} r={3} fill="#338AF7" />
      <Circle cx={10} cy={310} r={10} fill="#338AF7" />
      <Circle cx={361} cy={285} r={6} fill="#338AF7" />
      <Circle cx={16} cy={205} r={6} fill="#338AF7" />
      <Circle cx={356} cy={200} r={3} fill="#338AF7" />
      <Circle cx={54} cy={134} r={3} fill="#338AF7" />
      <Circle cx={346} cy={103} r={14} fill="#338AF7" />
      <Circle cx={30} cy={68} r={20} fill="#338AF7" />
      <Circle cx={276} cy={33} r={7} fill="#338AF7" />
      <Circle cx={135} cy={6} r={6} fill="#338AF7" />
    </Svg>
  );
};
export default LogoBG;
