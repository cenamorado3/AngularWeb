import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  archives = [
    { name: 'Form'},
    { name: 'Github'},
    { name: 'Disarray'},
    { name: 'Like'},
    { name: 'Password'},
    { name: 'Product'},
    { name: 'Keyboards'},
    { name: 'Mice'},
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }


}
