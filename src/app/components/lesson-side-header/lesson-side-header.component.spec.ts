import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSideHeaderComponent } from './lesson-side-header.component';

describe('LessonSideHeaderComponent', () => {
  let component: LessonSideHeaderComponent;
  let fixture: ComponentFixture<LessonSideHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
