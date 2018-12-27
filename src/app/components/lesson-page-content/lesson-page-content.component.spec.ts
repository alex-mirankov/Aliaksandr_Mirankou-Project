import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPageContentComponent } from './lesson-page-content.component';

describe('LessonPageContentComponent', () => {
  let component: LessonPageContentComponent;
  let fixture: ComponentFixture<LessonPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
