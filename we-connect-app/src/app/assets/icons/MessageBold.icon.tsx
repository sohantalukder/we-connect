import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const MessageBoldIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.015C2 6.747 6.21 2 12.02 2 17.7 2 22 6.657 22 11.985 22 18.165 16.96 22 12 22c-1.64 0-3.46-.44-4.92-1.302-.51-.31-.94-.54-1.49-.36l-2.02.6c-.51.16-.97-.24-.82-.78l.67-2.244c.11-.31.09-.641-.07-.902C2.49 15.43 2 13.697 2 12.015zm8.7 0c0 .711.57 1.282 1.28 1.292.71 0 1.28-.58 1.28-1.282 0-.711-.57-1.282-1.28-1.282-.7-.01-1.28.571-1.28 1.272zm4.61.01c0 .701.57 1.282 1.28 1.282.71 0 1.28-.58 1.28-1.282 0-.711-.57-1.282-1.28-1.282-.71 0-1.28.571-1.28 1.282zm-7.94 1.282c-.7 0-1.28-.58-1.28-1.282 0-.711.57-1.282 1.28-1.282.71 0 1.28.571 1.28 1.282a1.29 1.29 0 01-1.28 1.282z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};
export default MessageBoldIcon;
