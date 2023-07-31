import { component, useHtml } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './skill-block.component.html';
import './skill-block.component.scss';
import { SkillBlock } from '../../../types/models';

@component({ template })
export class SkillBlockComponent extends AppComponent {
  constructor(private readonly props: SkillBlock) {
    super();
  }

  protected inject() {
    this.node.querySelector('ul')?.append(
      ...this.props.groups.map(({ values }) => {
        return useHtml('<li>{{text}}</li>', { text: values.join(', ') });
      }),
    );
  }
}
