import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// Model/interface for each ember
interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
  color: string;
}

// list of pallete colors
const colors = [
  '#897ddd',
  '#a6a4ae',
  '#34323d'
];

@Component({
  imports: [],
  selector: 'app-ember-background',
  styleUrl: './ember-background.css',
  templateUrl: './ember-background.html',
})
export class EmberBackground implements AfterViewInit {

  // References the canvas html tag in the html file with the canvas class
  @ViewChild('canvas')
  canvasRef!: ElementRef<HTMLCanvasElement>;

  // This is what draws on the canvas.
  private ctx!: CanvasRenderingContext2D;

  private embers: Ember[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      this.embers.push({
        x:
          Math.random() *
          canvas.width,

        y:
          Math.random() *
          canvas.height,

        size:
          Math.random() * 3 + 1,

        speed: Math.random() * .5 + .25,

        drift: (Math.random() - 0.5) * 0.6,

        opacity: Math.random(),
        color:
          colors[
          Math.floor(
            Math.random() * colors.length
          )
          ]
      });
    }

    this.animate();
  }

  private drawEmbers() {
    for (const ember of this.embers) {
      // Start drawing
      this.ctx.beginPath();

      // Path to draw
      this.ctx.arc(
        ember.x,
        ember.y,
        ember.size,
        0,
        Math.PI * 2
      );

      this.ctx.fillStyle =
        `#897ddd`;

      // Glow(Blur) of size 10 and of ember color
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor =
        ember.color;

      // Draw the circle
      this.ctx.fill();
    }
  }

  private animate() {
    // Clean canvas by drawing a rect on top of it.
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    // Loop through each ember object, move and draw.
    for (const ember of this.embers) {
      ember.y -= ember.speed;
      ember.x += ember.drift;
      if (ember.y < 0) {
        ember.y =
          window.innerHeight;

        ember.x =
          Math.random() *
          window.innerWidth;
      }
    }

    // Once browser is ready, redraw.
    this.drawEmbers();
    requestAnimationFrame(
      () => this.animate()
    );

  }


}
