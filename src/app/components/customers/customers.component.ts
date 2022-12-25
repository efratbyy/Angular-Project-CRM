import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers!: Customer[];
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  comments: string = ''
  address: string = ''
  phone: string = ''
  
  constructor(
    private cs: CustomersService,
    private modal: NgbModal,
  ) { }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe({
      next: (customersData: Customer[]) => (this.customers = customersData)
    })
  }


  deleteCustomer(customer: Customer): void {
    if(confirm('Are you sure?')) {
      this.cs
      .deleteCustomer(customer)
      .then(() => console.log('Customer was deleted'))
      .catch((err) => console.log(err))
    }
  }

  updateCustomer(customer: Customer) {
    let modalRef = this.modal.open(EditCustomerComponent, {
      size: "lg",
      centered: true,
      windowClass: "dark-modal"
    });
    modalRef.componentInstance.num = customer.num;
  }

  customerDetails(customer: Customer) {
    let modalRef = this.modal.open(CustomerDetailsComponent, {
      size: "lg",
      centered: true,
      windowClass: "dark-modal"
    });
    modalRef.componentInstance.num = customer.num;
  }
}
