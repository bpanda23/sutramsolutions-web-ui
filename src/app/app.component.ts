import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderIndexComponent } from './header-index/header-index.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderIndexComponent,HeaderComponent,FooterIndexComponent,FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
isHomePage() {
throw new Error('Method not implemented.');
}
  title = 'sutramsolutions-web-ui';
}
