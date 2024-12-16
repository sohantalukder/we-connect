import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const EmailIcon: React.FC<IconProps> = ({
  width = rs(25),
  height = rs(24),
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.88741 5.74701C3.24646 6.34218 2.8 7.32154 2.8 8.9V15.9C2.8 17.4785 3.24646 18.4578 3.88741 19.053C4.54042 19.6594 5.53796 20 6.9 20H16.9C18.262 20 19.2596 19.6594 19.9126 19.053C20.5535 18.4578 21 17.4785 21 15.9V8.9C21 7.32154 20.5535 6.34218 19.9126 5.74701C19.2596 5.14064 18.262 4.8 16.9 4.8H6.9C5.53796 4.8 4.54042 5.14064 3.88741 5.74701ZM2.66259 4.42799C3.75958 3.40936 5.26204 3 6.9 3H16.9C18.538 3 20.0404 3.40936 21.1374 4.42799C22.2465 5.45782 22.8 6.97846 22.8 8.9V15.9C22.8 17.8215 22.2465 19.3422 21.1374 20.372C20.0404 21.3906 18.538 21.8 16.9 21.8H6.9C5.26204 21.8 3.75958 21.3906 2.66259 20.372C1.55354 19.3422 1 17.8215 1 15.9V8.9C1 6.97846 1.55354 5.45782 2.66259 4.42799Z"
        fill={fill || colors.default1}
        fillOpacity={1}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6032 8.83832C17.9134 9.2267 17.8501 9.79301 17.4617 10.1032L14.3306 12.6041C12.9725 13.6853 10.8175 13.6853 9.45944 12.6041L9.45722 12.6023L6.33723 10.1023C5.94933 9.79153 5.88685 9.22512 6.19766 8.83723C6.50847 8.44933 7.07488 8.38685 7.46277 8.69766L10.5815 11.1967C11.2834 11.7546 12.5072 11.7544 13.2089 11.1963L16.3383 8.69678C16.7267 8.38657 17.293 8.44994 17.6032 8.83832Z"
        fill={fill || colors.default1}
        fillOpacity={1}
      />
    </Svg>
  );
};
export default EmailIcon;
