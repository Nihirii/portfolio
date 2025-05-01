import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWindowComponent } from './music-window.component';

describe('MusicWindowComponent', () => {
  let component: MusicWindowComponent;
  let fixture: ComponentFixture<MusicWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
