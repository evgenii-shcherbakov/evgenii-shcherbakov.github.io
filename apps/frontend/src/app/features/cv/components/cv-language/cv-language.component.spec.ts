import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLanguageComponent } from './cv-language.component';

describe('CvLanguageComponent', () => {
  let component: CvLanguageComponent;
  let fixture: ComponentFixture<CvLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLanguageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
