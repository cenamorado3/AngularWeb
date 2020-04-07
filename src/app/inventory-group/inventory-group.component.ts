import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit {
  @Input('imageSrc') imageSrc: string;
  constructor(private service: ProductService) { }

  placeholder = [
    
  ]


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
