import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contact: Contact = { name: '',picName: '', email: '', birthday: new Date(), phones: [] };
  contacts: Contact[] = [];
  filteredContacts!: Contact[];
  name: string = '';

  constructor(private cs: ContactsService) {}

  ngOnInit(): void {
    this.cs.getAll().subscribe({
      next: (contacts1: Contact []) => {
        this.contacts = contacts1
      },
    });
  }
}
