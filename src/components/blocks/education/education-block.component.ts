import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './education-block.component.html';
import './education-block.component.scss';
import { EducationBlock } from '../../../types/models';
import { SvgPath } from '../../../constants/enums';

@component({ template })
export class EducationBlockComponent extends AppComponent {
  constructor(private readonly props: EducationBlock) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      ...this.props,
      locationSvgPath: SvgPath.LOCATION,
      calendarSvgPath: SvgPath.CALENDAR,
    };
  }
}
