import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// Model/interface for each ember
interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
}

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

        speed: Math.random() * 2 + 0.5,

        drift: 0,

        opacity: Math.random()
      });
    }

    this.animate();
  }

  private drawEmbers() {
    for (const ember of this.embers) {
      this.ctx.beginPath();

      this.ctx.arc(
        ember.x,
        ember.y,
        2,
        0,
        Math.PI * 2
      );

      this.ctx.fillStyle =
        '#897ddd';

      this.ctx.fill();
    }
  }

  private animate() {
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    for (const ember of this.embers) {
      ember.y -= 1;
      if (ember.y < 0) {
        ember.y =
          window.innerHeight;

        ember.x =
          Math.random() *
          window.innerWidth;
      }
    }

    this.drawEmbers();
    requestAnimationFrame(
      () => this.animate()
    );

  }


}
