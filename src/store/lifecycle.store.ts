import { IStream, Store, Stream } from 'rxspa';
import { ILifecycleStore } from '../types/interfaces';

export class LifecycleStore extends Store<undefined> implements ILifecycleStore {
  protected defaultState: undefined;

  appInit: IStream<boolean> = new Stream(true);

  toggleAppInit() {
    this.appInit.value = !this.appInit.value;
  }
}
