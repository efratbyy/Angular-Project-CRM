import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() num! : string;
  customer: Customer = {num: '', firstName: '', lastName: '', phone: '', email: '', comments: '', address: ''}
  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cs.getCustomerByNum(this.num).subscribe({
      next: (customerData: Customer) => (this.customer = customerData)
    })
  }

  closeModal(): void{
    this.activeModal.close()
  }

}