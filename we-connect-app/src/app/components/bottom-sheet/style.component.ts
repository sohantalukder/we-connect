import {StyleSheet} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../assets/ts/core.data';
import rs from '../../assets/styles/responsiveSize.style.asset';

const bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    zIndex: 999,
  },
  backdrop: {backgroundColor: 'rgba(1,1,1, 0.1)', flex: 1},
  backdropHandler: {flex: 1},
  viewContainer: {
    height: 'auto',
    maxHeight: '65%',
    minHeight: '15%',
    backgroundColor: customTheme.colors.surface_dark,
    paddingTop: 24,
    paddingBottom: 13,
  },
  topBar: {
    alignSelf: 'center',
    width: rs(36),
    height: 5,
    backgroundColor: customTheme.colors.grey5,
  },
});
export default bottomSheetStyles;
