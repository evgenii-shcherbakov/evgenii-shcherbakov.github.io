import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './contact-block.component.html';
import './contact-block.component.scss';
import { ContactBlock } from '../../../types/models';

@component({ template })
export class ContactBlockComponent extends AppComponent {
  constructor(private readonly props: ContactBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return this.props;
  }
}
