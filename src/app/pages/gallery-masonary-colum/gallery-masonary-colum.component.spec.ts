import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasonaryColumComponent } from './gallery-masonary-colum.component';

describe('GalleryMasonaryColumComponent', () => {
  let component: GalleryMasonaryColumComponent;
  let fixture: ComponentFixture<GalleryMasonaryColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryMasonaryColumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryMasonaryColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
