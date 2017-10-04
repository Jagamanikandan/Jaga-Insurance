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
  customerslist: CustomerData[];
  customerData: CustomerData;
  selectedCustomer: CustomerData;
  constructor(private router: Router, private customersListService: CustomersListService) {
    this.customerslist = customersListService.getCustomersList();
}

// getCustomersList(): void {
// this.customersListService.getCustomersList().then(customerslist => this.customerslist = customerslist);
// }

onSelect(customerdata: CustomerData): void {
  this.selectedCustomer = customerdata;
}

gotoCustomer(): void {
  this.router.navigate(['viewcustomer', this.selectedCustomer.firstName]);
}
}

