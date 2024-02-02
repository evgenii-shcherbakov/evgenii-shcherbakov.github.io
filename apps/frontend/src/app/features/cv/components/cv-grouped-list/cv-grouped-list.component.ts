import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-grouped-list',
  standalone: true,
  imports: [],
  templateUrl: './cv-grouped-list.component.html',
  styleUrl: './cv-grouped-list.component.scss',
})
export class CvGroupedListComponent {
  @Input() groups: string[][] = [];
}
