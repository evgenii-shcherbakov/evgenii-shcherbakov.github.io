import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './binary-block.component.html';
import './binary-block.component.scss';
import { BinaryBlock } from '../../../types/models';

@component({ template })
export class BinaryBlockComponent extends AppComponent {
  constructor(private readonly props: BinaryBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return this.props;
  }
}
