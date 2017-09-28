import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersListService } from './customerslist.service';
import { CustomerData } from '..//customer';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent {
  private router: Router;
  customerslist: CustomerData[];
  customerData: CustomerData;
  constructor(private customersListService: CustomersListService) {
  this.customerslist = customersListService.getCustomersList();
}
gotoCustomer(firstName: String): void {
  this.router.navigate(['/viewcustomer', firstName]);
}
}

