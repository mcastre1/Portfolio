import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconService } from '../../services/icon';

@Component({
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  constructor(private iconService: IconService) {
    this.iconService.initialize()
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/documents/MiguelCastrejon_Resume.pdf';
    link.download = 'MiguelCastrejon_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
