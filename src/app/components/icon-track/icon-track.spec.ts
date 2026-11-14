import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconTrack } from './icon-track';

describe('IconTrack', () => {
  let component: IconTrack;
  let fixture: ComponentFixture<IconTrack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTrack],
    }).compileComponents();

    fixture = TestBed.createComponent(IconTrack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
