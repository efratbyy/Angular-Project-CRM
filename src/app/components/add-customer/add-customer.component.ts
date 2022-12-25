import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  customer: Customer = {firstName: '', lastName: '', phone: '', email: '', comments: '', address: ''}

  constructor(
    private cs: CustomersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.cs
    .addCustomer(this.customer)
    .then(() => {
      console.log('Customer was added');
      this.reset();
      this.router.navigate(['./customers'])
    })
    .catch((err) => console.log(err))
  }
  reset() {
    this.customer = {firstName: '', lastName: '', phone: '', email: '', comments: '', address: ''}
  }

  cancelModal(){
    this.router.navigate(['./customers'])
  }
}
