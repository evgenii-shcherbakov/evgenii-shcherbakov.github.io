import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './text-block.component.html';
import './text-block.component.scss';

@component({ template })
export class TextBlockComponent extends AppComponent {
  constructor(private readonly text: string) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      text: this.text,
    };
  }
}
