import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface RepositoryLanguage {
  name: string;
  percentage: number;
  color: string;
}
@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-language-bar',
  styleUrl: './language-bar.css',
  templateUrl: './language-bar.html',
})
export class LanguageBar {
  @Input() languages: RepositoryLanguage[] = [];
}
