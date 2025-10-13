import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-single-left-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-single-left-sidebar.component.html',
  styleUrl: './blog-single-left-sidebar.component.scss'
})
export class BlogSingleLeftSidebarComponent {

}
