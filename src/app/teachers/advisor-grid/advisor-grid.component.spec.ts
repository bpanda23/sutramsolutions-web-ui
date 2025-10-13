import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorGridComponent } from './advisor-grid.component';

describe('AdvisorGridComponent', () => {
  let component: AdvisorGridComponent;
  let fixture: ComponentFixture<AdvisorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
