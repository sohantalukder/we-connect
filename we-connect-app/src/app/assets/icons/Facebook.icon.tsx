import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';

const FacebookIcon: React.FC<IconProps> = ({
  width = rs(25),
  height = rs(24),
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_442_1657)">
        <Path
          d="M12.5 0C5.872 0 .5 5.372.5 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12z"
          fill="url(#paint0_linear_442_1657)"
        />
        <Path
          d="M14.229 16.858h3.256l.512-3.308h-3.768V11.74c0-1.374.449-2.592 1.734-2.592h2.066V6.262c-.363-.05-1.13-.156-2.581-.156-3.029 0-4.805 1.6-4.805 5.243v2.201H7.53v3.308h3.113v9.093c.616.092 1.241.155 1.882.155.58 0 1.146-.053 1.704-.128v-9.12z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_442_1657"
          x1={4.0958}
          y1={3.5958}
          x2={22.469}
          y2={21.969}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2AA4F4" />
          <Stop offset={1} stopColor="#007AD9" />
        </LinearGradient>
        <ClipPath id="clip0_442_1657">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default FacebookIcon;
