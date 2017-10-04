import { Injectable } from '@angular/core';
import { CustomerData } from '..//customer';

@Injectable()
export class CustomersListService {
    customerslist: CustomerData[] = [
    { id: 1,
       firstName: 'Jaga',
       lastName: 'P',
       dateOfBirth: '20/09/2000',
       phoneNumber: '7894561230',
       gender: 'male',
       addressLine: '35 my home',
       city: 'Chennai',
       state: 'Tamil Nadu',
       pinCode: '600000'
       },
      {
       id: 2,
       firstName: 'Madhu',
       lastName: 'J',
       dateOfBirth: '10/12/1980',
       phoneNumber: '25476321450',
       gender: 'female',
       addressLine: '4565 my home',
       city: 'Chennai',
       state: 'Tamil Nadu',
       pinCode: '600010'
       },
  ];

  getCustomersList(): CustomerData[] {
    return this.customerslist;
  }
  getCustomer(firstname: string): CustomerData {
    return this.getCustomersList().find(customer => customer.firstName === firstname);
  }
}
