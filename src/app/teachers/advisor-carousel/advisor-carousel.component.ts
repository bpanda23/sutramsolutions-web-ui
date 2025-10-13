import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advisor-carousel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './advisor-carousel.component.html',
  styleUrl: './advisor-carousel.component.scss'
})
export class AdvisorCarouselComponent {

}
