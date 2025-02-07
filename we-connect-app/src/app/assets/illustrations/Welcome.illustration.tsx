import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';

const WelcomeIllustration: React.FC<IconProps> = ({
  width = rs(274),
  height = rs(279),
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 274 279" fill="none">
      <Circle
        cx={7.70232}
        cy={231.536}
        r={7.45232}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={269.28}
        cy={212.905}
        r={4.47139}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={12.1745}
        cy={153.287}
        r={4.47139}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={265.552}
        cy={149.56}
        r={2.23569}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={126.939}
        cy={229.3}
        r={2.23569}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={40.4916}
        cy={100.375}
        r={2.23569}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={258.099}
        cy={77.2731}
        r={10.4332}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={22.6078}
        cy={51.1898}
        r={14.9046}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={207.424}
        cy={259.855}
        r={16.3951}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={205.935}
        cy={25.1068}
        r={5.21662}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={77.7537}
        cy={273.269}
        r={5.21662}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Circle
        cx={100.856}
        cy={4.98555}
        r={4.47139}
        fill={hexOpacityToColor(colors.primary, 0.7)}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M185.985 187.986A69.474 69.474 0 00206.333 139a69.333 69.333 0 00-138.667 0v58.448a10.884 10.884 0 0010.885 10.885H137a69.473 69.473 0 0048.986-20.347zm-74.657-44.825c-3.254 0-6.019 3.035-4.992 6.338 4.111 13.337 16.518 23.027 31.2 23.027 14.683 0 26.894-9.69 31.225-23.027 1.003-3.303-1.738-6.338-5.212-6.338h-52.221zm16.224-14.56l.049.074a1.94 1.94 0 002.178.685 1.97 1.97 0 001.346-1.86c0-4.38-1.639-8.711-4.062-11.941-2.398-3.182-5.849-5.678-9.641-5.678-3.793 0-7.244 2.496-9.642 5.678-2.422 3.23-4.062 7.561-4.062 11.941a1.97 1.97 0 001.346 1.86 1.94 1.94 0 002.178-.685l.049-.074c.015-.015.009-.032.002-.052-.015-.044-.034-.1.169-.168-.031-.126.139-.282.344-.468.113-.104.236-.217.341-.339.409-.474.927-1.036 1.532-1.692.301-.326.623-.675.964-1.049 2.154-1.689 4.625-3.206 6.779-3.206 2.153 0 4.624 1.517 6.778 3.206.341.374.663.723.964 1.049a74.491 74.491 0 011.532 1.692c.14.163.264.31.373.44.12.143.223.265.312.367l.054.074c.046.062.082.111.117.146zm39.153 0l.049.074a1.94 1.94 0 002.178.685 1.97 1.97 0 001.346-1.86c0-4.38-1.64-8.711-4.062-11.941-2.398-3.182-5.849-5.678-9.642-5.678-3.792 0-7.243 2.496-9.641 5.678-2.423 3.23-4.062 7.561-4.062 11.941a1.97 1.97 0 001.346 1.86 1.94 1.94 0 002.178-.685l.049-.074c.015-.015.009-.032.002-.052-.015-.044-.034-.1.169-.168-.032-.126.139-.282.343-.468.114-.104.237-.217.342-.339.409-.474.927-1.036 1.532-1.692.301-.326.623-.675.964-1.049 2.154-1.689 4.625-3.206 6.778-3.206 2.154 0 4.625 1.517 6.779 3.206.341.374.663.723.964 1.049a74.491 74.491 0 011.532 1.692c.14.163.263.31.373.44.12.143.222.265.312.367l.054.074c.046.062.081.111.117.146z"
        fill={colors.primary}
      />
    </Svg>
  );
};
export default WelcomeIllustration;
