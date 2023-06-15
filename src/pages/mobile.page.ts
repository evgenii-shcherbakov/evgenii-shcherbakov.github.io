import { AppPage } from '../app';
import { PageQuery } from '../constants/enums';
import { IRouter } from 'rxspa/dist/browser/interfaces';
import { AppContext } from '../types/store';

export class MobilePage extends AppPage {
  constructor(router: IRouter, context: AppContext) {
    super(router, context, PageQuery.FULLSTACK, PageQuery.FULLSTACK);
  }

  protected onInit() {
    this.context.data.load(PageQuery.MOBILE);
    super.onInit();
  }
}
