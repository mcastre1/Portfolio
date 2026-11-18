import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  initialize():void{
    this.registerIcons();
  }

  private registerIcons(): void {
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