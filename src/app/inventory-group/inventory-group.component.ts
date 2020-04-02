import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlaskService } from '../flask-service.service';

@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit {

  constructor(private service: FlaskService) { }

  inventory: any[];
  error: any[];
  ngOnInit() {
    this.service.GetKBS()
      .subscribe(flasks => 
        {
          this.inventory = flasks;
          console.log(this.inventory)
        }, error =>
        {
          this.error = error;
        });

        console.log(this.inventory)
  }

}
