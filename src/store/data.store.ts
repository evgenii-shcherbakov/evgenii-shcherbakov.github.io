import { IStream, Store, Stream } from 'rxspa';
import { IDataStore } from '../types/interfaces';
import { Data } from '../types/models';
import { PageQuery } from '../constants/enums';
import { FULLSTACK_DATA, MOBILE_DATA } from '../constants/data';

export class DataStore extends Store<Data> implements IDataStore {
  protected defaultState: Data = FULLSTACK_DATA;

  data: IStream<Data> = new Stream(this.defaultState);

  load(page: PageQuery): void {
    this.data.value = page === PageQuery.MOBILE ? MOBILE_DATA : FULLSTACK_DATA;
  }
}
