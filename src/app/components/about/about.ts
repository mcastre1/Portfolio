import { Component } from '@angular/core';
import { MatExpansionModule} from '@angular/material/expansion';

@Component({
  imports: [MatExpansionModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}
