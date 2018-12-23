import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOtherPagesComponent } from './header-other-pages.component';

describe('HeaderOtherPagesComponent', () => {
  let component: HeaderOtherPagesComponent;
  let fixture: ComponentFixture<HeaderOtherPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOtherPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOtherPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
