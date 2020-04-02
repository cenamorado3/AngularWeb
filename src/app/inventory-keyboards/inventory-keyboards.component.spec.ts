import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryKeyboardsComponent } from './inventory-keyboards.component';

describe('InventoryKeyboardsComponent', () => {
  let component: InventoryKeyboardsComponent;
  let fixture: ComponentFixture<InventoryKeyboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryKeyboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryKeyboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
