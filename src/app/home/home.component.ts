import { Component, OnInit } from '@angular/core';
import { FlaskService } from '../flask-service.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flasks: any[];
  error: any[];
  constructor(private service: FlaskService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(flasks => 
        {
          this.flasks = flasks;
          console.log(this.flasks)
        }, error =>
        {
          this.error = error;
        });
        console.log(this.flasks);
  }
}
