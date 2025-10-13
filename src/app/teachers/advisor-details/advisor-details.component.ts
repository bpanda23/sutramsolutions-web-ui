import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advisor-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './advisor-details.component.html',
  styleUrl: './advisor-details.component.scss'
})
export class AdvisorDetailsComponent {

}
