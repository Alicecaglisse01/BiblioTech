

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccueilComponent],
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [],
})
export class AppComponent {

}




