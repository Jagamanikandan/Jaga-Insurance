import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {

 customers: CustomerData[] = [
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
     firstName: 'Arun',
     lastName: 'Tr',
     dateOfBirth: '10/12/1980',
     phoneNumber: '25476321450',
     gender: 'male',
     addressLine: '4565 my home',
     city: 'Chennai',
     state: 'Tamil Nadu',
     pinCode: '600010'
     },
];

  constructor() { }

  ngOnInit() {
  }

}

class CustomerData {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  gender: string;
  addressLine: string;
  city: string;
  state: string;
  pinCode: string;
}
