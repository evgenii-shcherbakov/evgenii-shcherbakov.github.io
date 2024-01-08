import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../app';
import template from './section.component.html';
import './section.component.scss';

@component({ template })
export class SectionComponent extends AppComponent {
  constructor(private readonly header: string, private readonly content: HTMLElement[]) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      header: this.header,
    };
  }

  protected inject() {
    this.node.querySelector('.section__content')?.append(...this.content);
  }
}
