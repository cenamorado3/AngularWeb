import { Component, OnInit, Input, Injectable, OnDestroy, Output } from '@angular/core';
import { ProductService } from '../Services/product-service.service';
import { InventoryAdminModalComponent } from '../inventory-admin-modal/inventory-admin-modal.component';
import { IRestService, RestService } from '../Services/rest.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit{
  @Input('imageSrc') imageSrc: string;
  constructor(private service: IRestService) { 
  }
  //subscription: Subscription;
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

  del(id, payload): any
  {
    this.service.delete(id, payload).subscribe(msg =>
      {
        alert(msg['Response']);
      });
  }


  // ngOnDestroy()
  // {
  //   this.subscription.unsubscribe();
  // }
}
