import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ContactService } from "../contact.service";
import 'rxjs/add/operator/switchMap';
import { Contact } from "../contact";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;
  submitted = false;
  items: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

  onSubmit() {
    this.submitted = true;
    debugger;
  }

}
