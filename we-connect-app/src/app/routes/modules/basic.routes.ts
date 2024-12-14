import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import SplashIndex from '@modules/splash';

const basicRoutes: Array<RouteProps> = [
  {
    accessLabel: 0,
    component: SplashIndex,
    isHide: false,
    name: screens.splash,
  },
];

export default basicRoutes;
