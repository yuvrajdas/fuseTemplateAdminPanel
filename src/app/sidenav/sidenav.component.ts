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
  isShowLeve1 = false;
  isShowLeve2 = false;
  isShowLeve3 = false;
  isShowLeve4 = false;
  isShowLeve5 = false;
  isShowLeve6 = false;
  isShwoSubLevels = false;
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
  showLevel1() {
    this.isShowLeve1 = !this.isShowLeve1;
  }
  showLevel2() {
    this.isShowLeve2 = !this.isShowLeve2;
  }

  showLevel3() {
    this.isShowLeve3 = !this.isShowLeve3;
  }
  showLevel4() {
    this.isShowLeve4 = !this.isShowLeve4;
  }
  showLevel5() {
    this.isShowLeve5 = !this.isShowLeve5;
  }
  showLevel6() {
    this.isShowLeve6 = !this.isShowLeve6;
  }
  showSubLevels() {
    this.isShwoSubLevels = !this.isShwoSubLevels;
  }
}
