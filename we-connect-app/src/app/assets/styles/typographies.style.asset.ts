import {StyleSheet} from 'react-native';
import {fonts} from '@styles/fonts.style.asset';
import {Colors} from '@styles/colors.style.asset';
const lineHeight = (size: number, percentage: number) => {
  return size * (percentage / 100);
};

export const typographies = (colors: Colors) =>
  StyleSheet.create({
    heading1: {
      fontFamily: fonts.urbanist700,
      fontSize: 48,
      lineHeight: lineHeight(48, 120),
      color: colors.default,
      textAlign: 'left',
    },
    heading2: {
      fontFamily: fonts.urbanist700,
      fontSize: 40,
      lineHeight: lineHeight(40, 120),
      color: colors.default,
      textAlign: 'left',
    },
    heading3: {
      fontFamily: fonts.urbanist700,
      fontSize: 32,
      lineHeight: lineHeight(32, 120),
      color: colors.default,
      textAlign: 'left',
    },
    heading4: {
      fontFamily: fonts.urbanist700,
      fontSize: 24,
      lineHeight: lineHeight(24, 120),
      color: colors.default,
      textAlign: 'left',
    },
    heading5: {
      fontFamily: fonts.urbanist700,
      fontSize: 20,
      lineHeight: lineHeight(20, 120),
      color: colors.default,
      textAlign: 'left',
    },
    heading6: {
      fontFamily: fonts.urbanist700,
      fontSize: 18,
      lineHeight: lineHeight(18, 120),
      color: colors.default,
      textAlign: 'left',
    },
    bodyXLargeBold: {
      fontFamily: fonts.urbanist700,
      fontSize: 18,
      lineHeight: lineHeight(18, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyXLargeSemibold: {
      fontFamily: fonts.urbanist600,
      fontSize: 18,
      lineHeight: lineHeight(18, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyXLargeMedium: {
      fontFamily: fonts.urbanist500,
      fontSize: 18,
      lineHeight: lineHeight(18, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyXLargeRegular: {
      fontFamily: fonts.urbanist400,
      fontSize: 18,
      lineHeight: lineHeight(18, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyLargeBold: {
      fontFamily: fonts.urbanist700,
      fontSize: 16,
      lineHeight: lineHeight(16, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyLargeSemibold: {
      fontFamily: fonts.urbanist600,
      fontSize: 16,
      lineHeight: lineHeight(16, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyLargeMedium: {
      fontFamily: fonts.urbanist500,
      fontSize: 16,
      lineHeight: lineHeight(16, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyLargeRegular: {
      fontFamily: fonts.urbanist400,
      fontSize: 16,
      lineHeight: lineHeight(16, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyMediumBold: {
      fontFamily: fonts.urbanist700,
      fontSize: 14,
      lineHeight: lineHeight(14, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyMediumSemibold: {
      fontFamily: fonts.urbanist600,
      fontSize: 14,
      lineHeight: lineHeight(14, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyMediumMedium: {
      fontFamily: fonts.urbanist500,
      fontSize: 14,
      lineHeight: lineHeight(14, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodyMediumRegular: {
      fontFamily: fonts.urbanist400,
      fontSize: 14,
      lineHeight: lineHeight(14, 140),
      color: colors.default,
      textAlign: 'left',
    },
    bodySmallBold: {
      fontFamily: fonts.urbanist700,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodySmallSemibold: {
      fontFamily: fonts.urbanist600,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodySmallMedium: {
      fontFamily: fonts.urbanist500,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodySmallRegular: {
      fontFamily: fonts.urbanist400,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodyXSmallBold: {
      fontFamily: fonts.urbanist700,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodyXSmallSemibold: {
      fontFamily: fonts.urbanist600,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodyXSmallMedium: {
      fontFamily: fonts.urbanist500,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
    bodyXSmallRegular: {
      fontFamily: fonts.urbanist400,
      fontSize: 12,
      color: colors.default,
      textAlign: 'left',
    },
  });
