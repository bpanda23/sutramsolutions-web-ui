import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-standard',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-standard.component.html',
  styleUrl: './blog-standard.component.scss'
})
export class BlogStandardComponent {

}
