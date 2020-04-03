import { Component} from '@angular/core';
import { InventoryGroupComponent } from '../inventory-group/inventory-group.component';
import { MiceService } from '../mice-service.service';

@Component({
  selector: 'inventory-mice',
  templateUrl: '../inventory-group/inventory-group.component.html',
  styleUrls: ['../inventory-group/inventory-group.component.css']
})
export class InventoryMiceComponent extends InventoryGroupComponent {

  constructor(service: MiceService) {
    super(service)
   }
}
