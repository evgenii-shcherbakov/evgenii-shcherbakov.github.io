import { Component, Input } from '@angular/core';
import { DEFAULT_PLACEHOLDER } from '@packages/common';

@Component({
  selector: 'app-cv-svg',
  standalone: true,
  imports: [],
  templateUrl: './cv-svg.component.html',
  styleUrl: './cv-svg.component.scss',
})
export class CvSvgComponent {
  @Input() type: string = DEFAULT_PLACEHOLDER;
  @Input() className: string = 'icon';

  get svgLink() {
    return `./assets/icons/${this.type}.svg#icon`;
  }

  get ariaLabel() {
    return `${this.type} icon`;
  }
}
