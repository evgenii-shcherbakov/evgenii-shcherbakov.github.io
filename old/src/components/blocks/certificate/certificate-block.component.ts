import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './certificate-block.component.html';
import './certificate-block.component.scss';
import { CertificateBlock } from '../../../types/models';

@component({ template })
export class CertificateBlockComponent extends AppComponent {
  constructor(private readonly props: CertificateBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return this.props;
  }
}
