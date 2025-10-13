import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-index',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header-index.component.html',
  styleUrl: './header-index.component.scss'
})
export class HeaderIndexComponent {

}
