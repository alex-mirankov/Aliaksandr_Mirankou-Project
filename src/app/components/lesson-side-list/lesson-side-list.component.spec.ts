import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSideListComponent } from './lesson-side-list.component';

describe('LessonSideListComponent', () => {
  let component: LessonSideListComponent;
  let fixture: ComponentFixture<LessonSideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
