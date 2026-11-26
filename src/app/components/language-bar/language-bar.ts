import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-language-bar',
  styleUrl: './language-bar.css',
  templateUrl: './language-bar.html',
})
export class LanguageBar {
  @Input() languages: string[] = [];
  ngOnInit(){
    console.log(this.languages);
  }
}
