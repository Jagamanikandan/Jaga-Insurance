import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomersListService } from '..//customerslist/customerslist.service';
import { CustomerData } from '..//customer';
import { CustomerslistComponent } from '..//customerslist/customerslist.component';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})


export class ViewcustomerComponent implements OnInit {
  customerdata: CustomerData;

  constructor(private customersListService: CustomersListService, private route: ActivatedRoute, private location: Location ) {
    // this.customerdata = customersListService.getCustomer('Jaga');
  }
  ngOnInit(): void {
     // this.route.paramMap
     // .switchMap((params: ParamMap) => this.customersListService.getCustomer('firstName'))
     // .subscribe(customerdata => this.customerdata = customerdata);
  }

  goBack(): void {
    this.location.back();
  }
}
