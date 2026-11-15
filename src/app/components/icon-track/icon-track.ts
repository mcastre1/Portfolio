import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-icon-track',
  standalone: true,
  styleUrl: './icon-track.css',
  templateUrl: './icon-track.html',
})
export class IconTrack {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer){
    this.iconRegistry.addSvgIcon(
      'css3-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/css-3.svg')
    );
    this.iconRegistry.addSvgIcon(
      'python-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/python.svg')
    );
    this.iconRegistry.addSvgIcon(
      'csharp-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/c-sharp.svg')
    );
    this.iconRegistry.addSvgIcon(
      'cplusplus-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/c-plusplus.svg')
    );
    this.iconRegistry.addSvgIcon(
      'java-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/java.svg')
    );
    this.iconRegistry.addSvgIcon(
      'html5-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/html-5.svg')
    );
  }
}
