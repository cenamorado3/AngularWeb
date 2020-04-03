import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMiceComponent } from './inventory-mice.component';

describe('InventoryMiceComponent', () => {
  let component: InventoryMiceComponent;
  let fixture: ComponentFixture<InventoryMiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
