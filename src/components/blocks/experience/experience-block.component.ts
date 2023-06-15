import { component, HTMLTemplateVars, useHtml } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './experience-block.component.html';
import './experience-block.component.scss';
import { ExperienceBlock } from '../../../types/models';

@component({ template })
export class ExperienceBlockComponent extends AppComponent {
  constructor(private readonly props: ExperienceBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      company: this.props.company,
      position: this.props.position,
      dates: this.props.dates,
    };
  }

  protected inject() {
    this.node
      .querySelector('ul')
      ?.append(
        ...this.props.summary.map((summaryText: string) =>
          useHtml('<li>{{text}}</li>', { text: summaryText }),
        ),
      );
  }
}
