import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPageCompileComponent } from './lesson-page-compile.component';

describe('LessonPageCompileComponent', () => {
  let component: LessonPageCompileComponent;
  let fixture: ComponentFixture<LessonPageCompileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPageCompileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPageCompileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
