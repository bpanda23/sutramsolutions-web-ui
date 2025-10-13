import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-grid',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.scss'
})
export class CoursesGridComponent {

}
