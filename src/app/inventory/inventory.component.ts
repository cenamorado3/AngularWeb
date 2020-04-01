import { Component, Input } from '@angular/core';

@Component({
  selector: 'inventory-item',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent{
@Input('title') title: string;
@Input('imageSrc') imageSrc: string;

  isSelected:boolean;

  toggle()
  {
    this.isSelected = !this.isSelected;
  }

}
