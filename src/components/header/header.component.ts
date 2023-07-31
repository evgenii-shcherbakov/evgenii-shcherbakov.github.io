import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../app';
import template from './header.component.html';
import './header.component.scss';

@component({ template })
export class HeaderComponent extends AppComponent {
  constructor(private readonly title: string, private readonly job: string) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      title: this.title,
      job: this.job,
    };
  }
}
