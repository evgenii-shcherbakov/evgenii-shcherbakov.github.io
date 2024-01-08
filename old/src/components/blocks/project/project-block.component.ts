import { component } from 'rxspa';
import { AppComponent } from '../../../app';
import template from './project-block.component.html';
import './project-block.component.scss';
import { Project, ProjectBlock } from '../../../types/models';
import { ProjectComponent } from '../../project/project.component';

@component({ template })
export class ProjectBlockComponent extends AppComponent {
  constructor(private readonly props: ProjectBlock) {
    super();
  }

  protected inject() {
    this.node?.append(
      ...this.props.projects.map((project: Project) => {
        return new ProjectComponent(project).render();
      }),
    );
  }
}
