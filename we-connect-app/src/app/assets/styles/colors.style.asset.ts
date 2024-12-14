import {
  DarkTheme,
  DefaultTheme,
  Theme as NativeTheme,
} from '@react-navigation/native';

type ColorMode = 'light' | 'dark';
interface Colors {
  primary: string;
  secondary: string;
  badgeColor: string;
  black: string;
  white: string;
  transparent: string;
  default: string;
  whiteOpacity: string;
  gray0: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  background: string;
  success1: string;
  success2: string;
  success3: string;
  error1: string;
  error2: string;
  error3: string;
  info1: string;
  gray2Opacity2: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

interface ThemeColors extends Omit<NativeTheme, 'colors'> {
  colors: Colors;
}

const appColors: Record<ColorMode, ThemeColors> = {
  light: {
    ...DefaultTheme,
    colors: {
      primary: '#006DF5',
      secondary: '#F4F4F4',
      badgeColor: '#E8191C',
      black: '#000000',
      white: '#ffffff',
      default: '#FFFFFF',
      transparent: 'transparent',
      whiteOpacity: '#FF573300',
      gray0: '#1B1D20',
      gray1: '#323436',
      gray2: '#494A4D',
      gray3: '#5F6163',
      gray4: '#767779',
      gray5: '#98999B',
      gray6: '#AFB0B1',
      gray7: '#DDDDDE',
      gray8: '#E8E8E9',
      gray9: '#F4F4F4',
      background: '#FAFAFB',
      success1: '#3B8756',
      success2: '#CEFDD6',
      success3: '#F7FFF5',
      error1: '#E8191C',
      error2: '#FFECEA',
      error3: '#FFFBFF',
      info1: '#EFCC41',
      gray2Opacity2: '#32343633',
      card: '#FFFFFF',
      text: '#FFFFFF',
      border: '#FFFFFF',
      notification: '#FFFFFF',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      primary: '#004BB5',
      secondary: '#2C2C2C',
      badgeColor: '#9F1210',
      black: '#000000',
      white: '#FFFFFF',
      default: '#000000',
      transparent: 'transparent',
      whiteOpacity: '#252525',
      gray0: '#F4F4F4',
      gray1: '#DDDDDE',
      gray2: '#B0B1B2',
      gray3: '#9A9B9D',
      gray4: '#7C7D7F',
      gray5: '#616263',
      gray6: '#4A4B4D',
      gray7: '#373839',
      gray8: '#2C2D2F',
      gray9: '#1A1B1C',
      background: '#29282b',
      success1: '#3B8756',
      success2: '#CEFDD6',
      success3: '#F7FFF5',
      error1: '#E8191C',
      error2: '#FFECEA',
      error3: '#FFFBFF',
      info1: '#EFCC41',
      gray2Opacity2: '#32343666',
      card: '#000000',
      text: '#000000',
      border: '#000000',
      notification: '#000000',
    },
  },
};

export type {ColorMode, Colors};
export default appColors;
