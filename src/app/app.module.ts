import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { MaterialModule } from "@angular/material";
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component'

import { ContactService } from "./contact.service";
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

import { firebaseConfig } from "./firebaseConfig";

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AboutComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
