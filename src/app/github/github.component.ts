import { GithubFollowersService } from '../Services/github-service.service';
import { Component, OnInit } from '@angular/core';

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
