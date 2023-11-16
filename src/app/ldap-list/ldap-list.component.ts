import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../models/user-ldap";
import {MatPaginator} from "@angular/material/paginator";
import {LDAP_USERS} from "../models/ldap-mock-data";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UsersService} from "../service/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);
  unactiveSelected = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | null;

  constructor(private usersService: UsersService, private router: Router) {

    this.paginator = null;

  }

  ngOnInit(): void {
    console.log('Values on ngOInit(): ');

    this.dataSource.paginator = this.paginator;

    console.log("Mat Paginator;", this.paginator);

    this.dataSource.filterPredicate = (data, filter) => this.filterPredicate(data, filter);

    this.getUsers();
  }

  filterPredicate(data: UserLdap, filter: string): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator)
  }

  private getUsers(): void {
    // if (this.unactiveSelected) {
    //   this.dataSource.data = LDAP_USERS.filter(user => !user.active)
    // } else {
    //   this.dataSource.data = LDAP_USERS;
    // }

    this.usersService.getUsers().subscribe(
      users => {
        if (this.unactiveSelected) {
          this.dataSource.data = users.filter( user =>
          !user.active
          );
        } else {
          this.dataSource.data = users
        }
      });
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }

  edit(login: string) : void {
    this.router.navigate(['users/', login]).then( (e) => {
      if (!e) {
        console.error('Navigation has failed !');
      }
    });
  }

}

