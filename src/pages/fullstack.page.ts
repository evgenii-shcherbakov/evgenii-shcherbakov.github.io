import { AppPage } from '../app';
import { PageQuery } from '../constants/enums';
import { IRouter } from 'rxspa/dist/browser/interfaces';
import { AppContext } from '../types/store';

export class FullstackPage extends AppPage {
  constructor(router: IRouter, context: AppContext) {
    super(router, context, PageQuery.MOBILE, PageQuery.MOBILE);
  }

  protected onInit() {
    this.context.data.load(PageQuery.FULLSTACK);
    super.onInit();
  }
}
