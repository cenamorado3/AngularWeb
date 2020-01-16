import { GithubFollowersService } from '../github-service.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  followers: any[];
  error: any[];
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers, error =>
        {
          this.error = error;
        });
  }
}
