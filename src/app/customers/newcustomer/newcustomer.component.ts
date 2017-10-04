import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  private location: Location;
  private route: ActivatedRoute;

  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
