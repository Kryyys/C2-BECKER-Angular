import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LdapListComponent } from './ldap-management/ldap-list/ldap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppMaterialModule } from './app-material.module';
import { NavbarComponent } from './ldap-management/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LdapEditComponent } from './ldap-management/ldap-edit/ldap-edit.component';
import { LdapAddComponent } from './ldap-management/ldap-add/ldap-add.component';
import { AlertComponent } from './share/alert/alert.component';
import { LdapManagementModule } from './ldap-management/ldap-management.module';

@NgModule({
  declarations: [
    AppComponent,
    LdapListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LdapEditComponent,
    LdapAddComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LdapManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
