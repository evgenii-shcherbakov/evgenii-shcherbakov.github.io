import { IStream, Store } from 'rxspa';
import { Data } from './models';
import { PageQuery } from '../constants/enums';

export interface ILifecycleStore extends Store<undefined> {
  appInit: IStream<boolean>;
  toggleAppInit(): void;
}

export interface IDataStore extends Store<Data> {
  data: IStream<Data>;
  load(page: PageQuery): void;
}
