import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdminModalComponent } from './inventory-admin-modal.component';

describe('InventoryAdminModalComponent', () => {
  let component: InventoryAdminModalComponent;
  let fixture: ComponentFixture<InventoryAdminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAdminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
