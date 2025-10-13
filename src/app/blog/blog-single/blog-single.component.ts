import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent {

}
