import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navigate-to-archive',
  templateUrl: './navigate-to-archive.component.html',
  styleUrls: ['./navigate-to-archive.component.css']
})
export class NavigateToArchiveComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
