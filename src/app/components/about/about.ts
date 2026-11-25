import { Component } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule, MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatExpansionModule, MatIconModule, MatIcon],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}
