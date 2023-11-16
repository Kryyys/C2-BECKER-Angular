import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapDetailsComponent} from "./service/ldap-details/ldap-details.component";



const routes: Routes = [
  { path: 'users/list', component: LdapListComponent },
  { path: 'user/:id', component: LdapDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
