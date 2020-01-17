import { Component, Input} from '@angular/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations:[
    name,
  ]
})

@Component({
  selector: 'templateForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  numbers = 
  [
    {id: 1, name:'One'},
    {id: 1, name:'Two'},
    {id: 1, name:'Three'},
    {id: 1, name:'Four'},
  ]

  log(e)
  {
    console.log(e);
  }
  onSubmit(f)
  {
    console.log(f);
  }
}
