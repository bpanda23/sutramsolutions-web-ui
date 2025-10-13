import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advisor-grid',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './advisor-grid.component.html',
  styleUrl: './advisor-grid.component.scss'
})
export class AdvisorGridComponent {

}
