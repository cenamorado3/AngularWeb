import { Component, Input} from '@angular/core';
import { NgModule } from '@angular/core';
import { FlaskService } from '../Services/flask-service.service';

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
  constructor(private service: FlaskService) {
  }
  flasks: any[];
  error: any[];
  numbers = 
  [
    {id: 1, name:'One'},
    {id: 2, name:'Two'},
    {id: 3, name:'Three'},
    {id: 4, name:'Four'},
  ]

  log(e)
  {
    console.log(e);
  }
  onSubmit(f)
  {
    console.log(f)
    this.service.create(f)
    .subscribe(flasks => 
      {
        
        this.flasks = flasks
      }, error =>
      {
        this.error = error;
      });
      console.log(this.flasks)
  }
}
