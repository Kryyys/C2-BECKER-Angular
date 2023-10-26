import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../models/user-ldap";
import {MatPaginator} from "@angular/material/paginator";
import {LDAP_USERS} from "../models/ldap-mock-data";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator | null;

  constructor() {
    this.paginator = null;
  }

  ngOnInit(): void {
    console.log('Values on ngOInit(): ');
    this.dataSource.paginator = this.paginator;
    console.log("Mat Paginator;", this.paginator);
    this.getUsers();
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator)
  }

  private getUsers() : void {
    this.dataSource.data = LDAP_USERS;
  }
}
