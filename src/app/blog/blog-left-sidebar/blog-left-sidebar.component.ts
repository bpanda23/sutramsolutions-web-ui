import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-left-sidebar.component.html',
  styleUrl: './blog-left-sidebar.component.scss'
})
export class BlogLeftSidebarComponent {

}
