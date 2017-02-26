import { Injectable } from '@angular/core';
import { Contact } from "./contact";

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    {
      id: 1,
      name: "Able",
      lastName:"A"
    },
    {
      id: 2,
      name: "Bob",
      lastName:"B"
    },
    {
      id: 3,
      name: "Chao",
      lastName:"C"
    },
    {
      id: 4,
      name: "Dict",
      lastName:"DDDD"
    }
  ];

  constructor() { }

  getContacts(): Promise<Contact[]>{
    return Promise.resolve(this.contacts)
  }

  getContact(id: Number): Promise<Contact> {
    // return this.getContacts().find(contact => contact.id == id);
    return this.getContacts().then(contacts => contacts.find(contact => contact.id == id))
  }

}
