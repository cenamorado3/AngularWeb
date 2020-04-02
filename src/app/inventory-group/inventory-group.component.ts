import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-group',
  templateUrl: './inventory-group.component.html',
  styleUrls: ['./inventory-group.component.css']
})
export class InventoryGroupComponent implements OnInit {

  constructor() { }

  inventory = 
[
    {name: 'Item 1',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 2',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 3',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 4',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 5',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 6',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 7',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 8',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 9',  source:'http://placehold.jp/350x250.png', description:'This is a description of '},
    {name: 'Item 10', source:'http://placehold.jp/350x250.png', description:'This is a description of '},
  ];
  ngOnInit() {
  }

}
