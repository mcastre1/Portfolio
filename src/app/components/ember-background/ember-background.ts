import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// Model/interface for each ember
interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  angle: number;
}

// list of pallete colors
const colors = [
  '#897ddd',
  '#a6a4ae',
  '#34323d'
];

@Component({
  imports: [],
  standalone: true,
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
    // We get our canvas reference
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // In case of resize we change the canvas wwidht and height
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Create and randomly assign attributes.
    for (let i = 0; i < 100; i++) {
      this.embers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * .5,
        opacity: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
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
        this.hexToRgba(ember.color, ember.opacity);

      // Glow(Blur) of size 10 and of ember color
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor =
        ember.color;

      // Draw the circle
      this.ctx.fill();
    }
  }

  private animate() {
    // Get new canvas size in case of resize.
    const canvas = this.canvasRef.nativeElement;

    // Clean canvas by drawing a rect of canvas size on top of it.
    this.ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Loop through each ember object, move and draw.
    for (const ember of this.embers) {
      
      ember.y -= ember.speed;
      ember.angle += 0.02;
      ember.x += Math.sin(ember.angle) * 0.3;
      ember.opacity -= 0.0002;
      
      // When ember goes above view port, move it all the way down with a new x.
      if (ember.y < 0) {
        ember.opacity = Math.random();
        ember.y = window.innerHeight;
        ember.x = Math.random() * window.innerWidth;
      }
    }

    // Once browser is ready, redraw.
    this.drawEmbers();
    requestAnimationFrame(
      () => this.animate()
    );

  }

  // Helper function to go from hex to rgba for rect fill
  private hexToRgba(
    hex: string,
    opacity: number
  ): string {

    const bigint = parseInt(
      hex.replace('#', ''),
      16
    );

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

}
