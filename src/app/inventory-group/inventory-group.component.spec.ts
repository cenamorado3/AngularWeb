import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGroupComponent } from './inventory-group.component';

describe('InventoryGroupComponent', () => {
  let component: InventoryGroupComponent;
  let fixture: ComponentFixture<InventoryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
