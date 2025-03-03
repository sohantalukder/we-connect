import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';

const GoogleIcon: React.FC<IconProps> = ({width = rs(25), height = rs(24)}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_433_743)">
        <Path
          d="M24.008 12.224c0-.983-.078-1.7-.248-2.444H12.73v4.438h6.474c-.13 1.102-.835 2.763-2.402 3.88l-.022.148 3.488 2.75.241.025c2.22-2.086 3.499-5.156 3.499-8.797"
          fill="#4285F4"
        />
        <Path
          d="M12.73 23.918c3.172 0 5.834-1.063 7.78-2.897l-3.708-2.923c-.992.704-2.323 1.195-4.072 1.195-3.107 0-5.744-2.086-6.684-4.969l-.138.012-3.626 2.857-.048.134c1.932 3.906 5.9 6.59 10.496 6.59z"
          fill="#34A853"
        />
        <Path
          d="M6.046 14.324a7.481 7.481 0 01-.391-2.365c0-.824.143-1.621.378-2.365l-.006-.159-3.672-2.903-.12.059A12.145 12.145 0 00.98 11.959c0 1.927.457 3.747 1.254 5.368l3.811-3.003z"
          fill="#FBBC05"
        />
        <Path
          d="M12.73 4.624c2.206 0 3.694.97 4.542 1.78l3.316-3.295C18.55 1.183 15.9 0 12.729 0 8.136 0 4.166 2.684 2.235 6.59l3.799 3.004c.953-2.884 3.59-4.97 6.696-4.97z"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_433_743">
          <Path fill="#fff" transform="translate(.98)" d="M0 0H23.04V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default GoogleIcon;
