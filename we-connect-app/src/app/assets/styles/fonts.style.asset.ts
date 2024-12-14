export const fonts = {
  sourceSans3400: 'SourceSans3-Regular',
  sourceSans3600: 'SourceSans3-SemiBold',
  sourceSans3700: 'SourceSans3-Bold',
};
type FontWeightType =
  | 'normal'
  | 'bold'
  | 'bolder'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

interface fwsObject {
  font400: FontWeightType;
  font600: FontWeightType;
  font700: FontWeightType;
}
export const fws: fwsObject = {
  font400: '400',
  font600: '600',
  font700: '700',
};
