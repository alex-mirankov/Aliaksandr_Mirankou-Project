import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSideItemComponent } from './lesson-side-item.component';

describe('LessonSideItemComponent', () => {
  let component: LessonSideItemComponent;
  let fixture: ComponentFixture<LessonSideItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
