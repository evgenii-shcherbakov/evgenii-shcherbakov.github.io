import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProjectListComponent } from './cv-project-list.component';

describe('CvProjectListComponent', () => {
  let component: CvProjectListComponent;
  let fixture: ComponentFixture<CvProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvProjectListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
