import { Dimensions, PixelRatio, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('screen');

// Helper function to round to nearest integer
const round = (value:number) => Math.round(PixelRatio.roundToNearestPixel(value));

// Responsive scaling function
const rs = (size:number | 'wf'|'hf'|'hwh', dimension:'h'|'w' = 'h') => {
  switch (size) {
    case 'wf': // Full width
      return round(width);
    case 'hf': // Full height
      return round(height);
    case 'hwh': // Height with status bar and margin offset
      return round(height - (height * 0.08195 + (StatusBar.currentHeight || 0)));
    default:
      // Scaling based on width or height
      if (dimension === 'w') {
        const baseWidth = 360;
        return round((size / baseWidth) * width);
      } else if (dimension === 'h') {
        const baseHeight = 640;
        return round((size / baseHeight) * height);
      }
  }
};

export default rs;
