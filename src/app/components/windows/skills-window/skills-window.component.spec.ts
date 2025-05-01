import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsWindowComponent } from './skills-window.component';

describe('SkillsWindowComponent', () => {
  let component: SkillsWindowComponent;
  let fixture: ComponentFixture<SkillsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
