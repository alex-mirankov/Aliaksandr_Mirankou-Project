import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPageInfoComponent } from './lesson-page-info.component';

describe('LessonPageInfoComponent', () => {
  let component: LessonPageInfoComponent;
  let fixture: ComponentFixture<LessonPageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
