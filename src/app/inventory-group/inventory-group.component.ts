import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ProductService } from '../product-service.service';
import { InventoryAdminModalComponent } from '../inventory-admin-modal/inventory-admin-modal.component';
import { IRestService } from '../rest.service';

@Injectable()
@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit{
  @Input('imageSrc') imageSrc: string;
  constructor(private service: ProductService) { }
  inventory: any[];
  error: any[];
  ngOnInit() {
    this.service.getAll()
      .subscribe(flasks => 
        {
          this.inventory = flasks;
        }, error =>
        {
          this.error = error;
        });
  }
}
