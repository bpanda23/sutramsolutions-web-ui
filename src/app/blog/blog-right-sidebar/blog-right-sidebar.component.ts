import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-right-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-right-sidebar.component.html',
  styleUrl: './blog-right-sidebar.component.scss'
})
export class BlogRightSidebarComponent {

}
