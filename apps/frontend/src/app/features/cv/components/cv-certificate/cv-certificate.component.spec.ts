import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCertificateComponent } from './cv-certificate.component';

describe('CvCertificateComponent', () => {
  let component: CvCertificateComponent;
  let fixture: ComponentFixture<CvCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvCertificateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
