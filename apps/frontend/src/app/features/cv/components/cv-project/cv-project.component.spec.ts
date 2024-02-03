import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProjectComponent } from './cv-project.component';

describe('CvProjectComponent', () => {
  let component: CvProjectComponent;
  let fixture: ComponentFixture<CvProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
