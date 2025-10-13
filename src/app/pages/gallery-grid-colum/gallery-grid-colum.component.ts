import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery-grid-colum',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery-grid-colum.component.html',
  styleUrl: './gallery-grid-colum.component.scss'
})
export class GalleryGridColumComponent {

}
