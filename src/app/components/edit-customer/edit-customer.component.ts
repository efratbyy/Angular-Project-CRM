import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  @Input() num! : string;
  customer: Customer = {num: '', firstName: '', lastName: '', phone: '', email: '', comments: '', address: ''}

  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cs.getCustomerByNum(this.num).subscribe({
      next: (customerData: Customer) => (this.customer = customerData)
    })
  }

  updateTheCustomer() {
    this.cs
    .updateCustomer(this.customer)
    .then(() => this.activeModal.close())
    .catch((err) => console.log(err))
  }

  closeModal2(): void{
    this.activeModal.close()
  }

}
