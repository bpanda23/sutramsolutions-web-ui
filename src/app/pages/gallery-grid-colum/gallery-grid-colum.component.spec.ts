import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGridColumComponent } from './gallery-grid-colum.component';

describe('GalleryGridColumComponent', () => {
  let component: GalleryGridColumComponent;
  let fixture: ComponentFixture<GalleryGridColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryGridColumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryGridColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
