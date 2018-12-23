import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPageMainComponent } from './lesson-page-main.component';

describe('LessonPageMainComponent', () => {
  let component: LessonPageMainComponent;
  let fixture: ComponentFixture<LessonPageMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPageMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
