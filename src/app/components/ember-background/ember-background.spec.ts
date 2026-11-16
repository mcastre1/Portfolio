import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmberBackground } from './ember-background';

describe('EmberBackground', () => {
  let component: EmberBackground;
  let fixture: ComponentFixture<EmberBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmberBackground],
    }).compileComponents();

    fixture = TestBed.createComponent(EmberBackground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
