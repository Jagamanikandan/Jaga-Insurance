import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
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
  private route: ActivatedRoute;
  customerdata: CustomerData;
  constructor(private customersListService: CustomersListService) {
  // this.customerdata = customersListService.getCustomer(this.customerdata.firstName);
  }
  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.customersListService.getCustomer(+params.get('firstName')))
    .subscribe(customerdata => this.customerdata = customerdata);

  }

}
