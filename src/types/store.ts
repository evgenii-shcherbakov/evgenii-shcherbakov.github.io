import { IDataStore, ILifecycleStore } from './interfaces';

export type AppContext = {
  lifecycle: ILifecycleStore;
  data: IDataStore;
};
