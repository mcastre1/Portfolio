import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon(
      'github-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/linkedin.svg')
    );
  }


}
