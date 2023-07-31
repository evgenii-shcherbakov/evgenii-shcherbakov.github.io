import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './experience-block.component.html';
import './experience-block.component.scss';
import { ExperienceBlock } from '../../../types/models';
import { ProjectBlockComponent } from '../project/project-block.component';
import { SvgPath } from '../../../constants/enums';

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
      calendarSvgPath: SvgPath.CALENDAR,
    };
  }

  protected inject() {
    this.node.append(new ProjectBlockComponent(this.props).render());
  }
}
