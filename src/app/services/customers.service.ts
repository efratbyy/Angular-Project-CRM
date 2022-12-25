import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers: Customer[] = [];

  customersRef = collection(this.firestore, 'customers');

  constructor(private firestore: Firestore) { }

  //add new customer
  addCustomer(customer: Customer): Promise<any> {
    return addDoc(this.customersRef, customer) as Promise<any>;
  }

  //get all customers from db
  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'num' }) as Observable<Customer[]>
  }

  //edit customer details
  editCustomer(newCustomer: Customer): Promise<any> {
    let customersRef = doc(this.firestore, `customers/${newCustomer.num}`);
    return setDoc(customersRef, newCustomer) as Promise<any>;
  }

  //get specific customer by number
  getCustomerByNum(num: string): Observable<Customer> {
    let customersRef = doc(this.firestore, `customers/${num}`);
    return docData(customersRef, { idField: 'num' }) as Observable<Customer>;
  }

  // update specific customer
  updateCustomer(newCustomer: Customer): Promise<any> {
    let customersRef = doc(this.firestore, `customers/${newCustomer.num}`);
    return setDoc(customersRef, newCustomer) as Promise<any>;
  }

  //delete specific customer
  deleteCustomer(customer: Customer): Promise<void> {
    let customersRef = doc(this.firestore, `customers/${customer.num}`);
    return deleteDoc(customersRef) as Promise<void>;
  }

  closeModal(customer: Customer): Observable<Customer> {
    let customersRef = doc(this.firestore, `customers/${customer.num}`);
    return docData(customersRef) as Observable<Customer>;
  }

}
