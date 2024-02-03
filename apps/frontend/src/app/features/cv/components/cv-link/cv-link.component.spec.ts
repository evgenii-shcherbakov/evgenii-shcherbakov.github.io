import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLinkComponent } from './cv-link.component';

describe('CvLinkComponent', () => {
  let component: CvLinkComponent;
  let fixture: ComponentFixture<CvLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
