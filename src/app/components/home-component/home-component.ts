import { Component } from '@angular/core';
import { IconTrack } from '../icon-track/icon-track';
import { CommonModule } from '@angular/common';

@Component({
  imports: [IconTrack, CommonModule],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})

export class HomeComponent {
  private languages = ['Python', 'C#', 'C++', 'Java', 'Javascript', 'Typescript', 'CSS', 'SCSS', 'Html', 'SQL'];
  private frameworks = ['Angular', 'Vue', 'React Native', '.NET', 'ASP.NET', 'Django', 'Flask'];
  private toolsPlatforms = ['Git', 'Github', 'Azure', 'SQL Server', 'PostgreSQL', 'Postman', 'VS Code', 'Cloudflare', 'Expo', 'Docker', 'Power Platforms'];

  openWebsite(url: string): void{
    window.open(url, '_blank');
  }
}
