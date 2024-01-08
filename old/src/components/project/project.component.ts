import { component, HTMLTemplateVars } from 'rxspa';
import { AppComponent } from '../../app';
import template from './project.component.html';
import './project.component.scss';
import { Project } from '../../types/models';

@component({ template })
export class ProjectComponent extends AppComponent {
  constructor(private readonly props: Project) {
    super();
  }

  protected vars(): HTMLTemplateVars {
    return {
      summary: this.props.summary,
      stack: this.props.stack.join(', '),
      link: this.props.link ?? '',
      name: this.props.name ?? '',
      nameClass: this.props.name ? 'project__name' : 'project__name hidden',
    };
  }

  protected compile() {
    if (this.props.link) {
      this.template = `<a href="{{link}}" target="_blank">${this.template}</a>`;
    }

    super.compile();
  }
}
