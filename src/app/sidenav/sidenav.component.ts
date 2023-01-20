import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}
  isAuthList = false;
  isInvoiceList = false;
  isshowPageLayoutLists = false;
  ngOnInit(): void {}
  showAuthenticationLists() {
    this.isAuthList = !this.isAuthList;
  }
  showInvoiceLists() {
    this.isInvoiceList = !this.isInvoiceList;
  }
  showPageLayoutLists() {
    this.isshowPageLayoutLists = !this.isshowPageLayoutLists;
  }
}
