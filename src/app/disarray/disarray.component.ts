import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'disarray',
  templateUrl: './disarray.component.html',
  styleUrls: ['./disarray.component.css']
})
export class DisarrayComponent{
  @Input('title') title: string

    isExpanded: boolean;


    toggle()
    {
      this.isExpanded = !this.isExpanded
    }
}
