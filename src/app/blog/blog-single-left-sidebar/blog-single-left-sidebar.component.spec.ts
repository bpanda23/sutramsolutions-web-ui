import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleLeftSidebarComponent } from './blog-single-left-sidebar.component';

describe('BlogSingleLeftSidebarComponent', () => {
  let component: BlogSingleLeftSidebarComponent;
  let fixture: ComponentFixture<BlogSingleLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSingleLeftSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSingleLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
