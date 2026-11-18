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

    this.iconRegistry.addSvgIcon(
      'angular-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/angular.svg')
    );
    this.iconRegistry.addSvgIcon(
      'azure-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/azure.svg')
    );
    this.iconRegistry.addSvgIcon(
      'django-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/django.svg')
    );
    this.iconRegistry.addSvgIcon(
      'docker-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/docker.svg')
    );
    this.iconRegistry.addSvgIcon(
      'dotnet-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/dotnet.svg')
    );
    this.iconRegistry.addSvgIcon(
      'flask-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/flask.svg')
    );
    this.iconRegistry.addSvgIcon(
      'mysql-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/mysql.svg')
    );
    this.iconRegistry.addSvgIcon(
      'postgresql-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/postgresql.svg')
    );
    this.iconRegistry.addSvgIcon(
      'postman-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/postman.svg')
    );
    this.iconRegistry.addSvgIcon(
      'react-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/react.svg')
    );
    this.iconRegistry.addSvgIcon(
      'vue-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/skills/vue.svg')
    );
  }
}