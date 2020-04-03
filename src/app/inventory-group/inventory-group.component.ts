import { Component, OnInit, Input } from '@angular/core';
import { FlaskService } from '../flask-service.service';

@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit {
  @Input('imageSrc') imageSrc: string;
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
  }
}
