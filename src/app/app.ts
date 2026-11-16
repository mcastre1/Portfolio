import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { EmberBackground } from './components/ember-background/ember-background';

@Component({
  imports: [RouterOutlet, Navbar, EmberBackground],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('portfolio');
}
