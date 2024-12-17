/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainIndex from './src/MainIndex';
import './src/app/helper/utilities/ignoreWarnings';

AppRegistry.registerComponent(appName, () => MainIndex);
