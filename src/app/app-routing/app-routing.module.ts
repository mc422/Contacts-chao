import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component'
import { ContactsListComponent } from '../contacts-list/contacts-list.component'
import { ContactsDetailComponent } from "../contacts-detail/contacts-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsListComponent
  },
  {
    path: 'contactdetails/:id',
    component: ContactsDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
