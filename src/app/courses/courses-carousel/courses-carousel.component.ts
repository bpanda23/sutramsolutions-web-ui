import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-carousel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './courses-carousel.component.html',
  styleUrl: './courses-carousel.component.scss'
})
export class CoursesCarouselComponent {

}
