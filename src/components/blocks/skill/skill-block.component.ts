import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './skill-block.component.html';
import './skill-block.component.scss';
import { SkillBlock } from '../../../types/models';

@component({ template })
export class SkillBlockComponent extends AppComponent {
  constructor(private readonly props: SkillBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      group: this.props.group,
      values: this.props.values.join(', '),
    };
  }
}
