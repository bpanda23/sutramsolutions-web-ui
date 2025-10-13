import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleRightSidebarComponent } from './blog-single-right-sidebar.component';

describe('BlogSingleRightSidebarComponent', () => {
  let component: BlogSingleRightSidebarComponent;
  let fixture: ComponentFixture<BlogSingleRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSingleRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSingleRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
