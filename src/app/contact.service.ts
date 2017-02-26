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

  getContacts(): Contact[]{
    return this.contacts
  }

  getContact(id: Number): Contact {
    return this.getContacts().find(contact => contact.id == id);
  }

}
