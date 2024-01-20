import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvGroupedListComponent } from './cv-grouped-list.component';

describe('CvGroupedListComponent', () => {
  let component: CvGroupedListComponent;
  let fixture: ComponentFixture<CvGroupedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvGroupedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvGroupedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
