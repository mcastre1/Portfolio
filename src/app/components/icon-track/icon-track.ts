import { Component, Input, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { IconService } from '../../services/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-icon-track',
  standalone: true,
  styleUrl: './icon-track.css',
  templateUrl: './icon-track.html',
})
export class IconTrack {
  @Input() iconNames: string[] = [];
  @Input() timer : number = 30;

  constructor(private iconService: IconService){
    this.iconService.initialize()
  }

  ngOnInit(){
    console.log(this.iconNames);
  }
}
