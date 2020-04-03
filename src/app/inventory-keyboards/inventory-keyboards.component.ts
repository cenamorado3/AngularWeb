import { Component, OnInit } from '@angular/core';
import { InventoryGroupComponent } from '../inventory-group/inventory-group.component';
import { FlaskService } from '../flask-service.service';

@Component({
  selector: 'inventory-keyboards',
  templateUrl: '../inventory-group/inventory-group.component.html',
  styleUrls: ['../inventory-group/inventory-group.component.css']
})
export class InventoryKeyboardsComponent extends InventoryGroupComponent {

  constructor(service: FlaskService) {
    super(service)
   }
}