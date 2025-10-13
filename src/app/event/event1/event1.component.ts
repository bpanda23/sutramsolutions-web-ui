import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event1',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './event1.component.html',
  styleUrl: './event1.component.scss'
})
export class Event1Component {

}
