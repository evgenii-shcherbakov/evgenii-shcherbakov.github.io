import { AppContext } from '../types/store';
import { dataStore, lifecycleStore } from '../store';

export const appContext: AppContext = {
  lifecycle: lifecycleStore,
  data: dataStore,
};
