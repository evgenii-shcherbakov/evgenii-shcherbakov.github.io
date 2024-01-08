import { bootstrap } from 'rxspa';
import { App, getAppConfig, appContext } from './app';
import './styles/global.scss';

bootstrap(new App(getAppConfig(location.search), appContext));
