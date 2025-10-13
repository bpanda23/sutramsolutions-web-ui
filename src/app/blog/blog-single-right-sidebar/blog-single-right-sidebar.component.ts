import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-single-right-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-single-right-sidebar.component.html',
  styleUrl: './blog-single-right-sidebar.component.scss'
})
export class BlogSingleRightSidebarComponent {

}
