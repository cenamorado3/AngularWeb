import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToArchiveComponent } from './navigate-to-archive.component';

describe('NavigateToArchiveComponent', () => {
  let component: NavigateToArchiveComponent;
  let fixture: ComponentFixture<NavigateToArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateToArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
