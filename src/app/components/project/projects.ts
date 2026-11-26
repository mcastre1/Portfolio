import { Component } from '@angular/core';
import { LanguageBar } from '../language-bar/language-bar';

@Component({
  imports: [LanguageBar],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {}
