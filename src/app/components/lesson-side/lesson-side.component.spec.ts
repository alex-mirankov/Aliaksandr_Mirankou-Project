import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSideComponent } from './lesson-side.component';

describe('LessonSideComponent', () => {
  let component: LessonSideComponent;
  let fixture: ComponentFixture<LessonSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
