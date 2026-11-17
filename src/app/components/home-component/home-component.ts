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
  private languages = ['Python', 'C#', 'C++', 'Java', 'Javascript', 'Typescript', 'CSS', 'Html'];
  private frameworks = [];
  private soft = [];

  openWebsite(url: string): void{
    window.open(url, '_blank');
  }
}
