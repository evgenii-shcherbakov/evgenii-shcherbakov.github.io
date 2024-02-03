import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CvLinkComponent } from '@/app/features/cv/components/cv-link/cv-link.component';

@Directive({
  selector: '[appCvLink]',
  standalone: true,
})
export class CvLinkDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}

  @Input() set appCvLink(link: string | undefined) {
    const ref = this.viewContainer.createComponent(CvLinkComponent);
    ref.setInput('url', link);
    ref.instance.template = this.template;
  }
}
