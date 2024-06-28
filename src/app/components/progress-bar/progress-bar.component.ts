import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  currentStep: number = 1;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url.includes('step1')) {
        this.currentStep = 1;
      } else if (this.router.url.includes('step2')) {
        this.currentStep = 2;
      } else if (this.router.url.includes('step3')) {
        this.currentStep = 3;
      }
    });
  }

}
