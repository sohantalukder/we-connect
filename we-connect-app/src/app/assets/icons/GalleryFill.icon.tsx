import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const GalleryFillIcon: React.FC<IconProps> = ({
  height = 24,
  width = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M37.199 28.033l-5.217-12.2c-.95-2.233-2.367-3.5-3.983-3.584-1.6-.083-3.15 1.034-4.334 3.167L20.5 21.1c-.667 1.2-1.617 1.917-2.65 2-1.05.1-2.1-.45-2.95-1.533l-.367-.466c-1.183-1.484-2.65-2.2-4.15-2.05-1.5.15-2.783 1.183-3.633 2.866l-2.884 5.75c-1.033 2.084-.933 4.5.284 6.467a6.612 6.612 0 005.65 3.15h21.266a6.646 6.646 0 005.55-2.983 6.524 6.524 0 00.584-6.267zM12.117 13.968a5.634 5.634 0 100-11.267 5.634 5.634 0 000 11.267z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};

export default GalleryFillIcon;
