import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSvgComponent } from './cv-svg.component';

describe('CvSvgComponent', () => {
  let component: CvSvgComponent;
  let fixture: ComponentFixture<CvSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSvgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
