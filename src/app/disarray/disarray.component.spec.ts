import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisarrayComponent } from './disarray.component';

describe('DisarrayComponent', () => {
  let component: DisarrayComponent;
  let fixture: ComponentFixture<DisarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
