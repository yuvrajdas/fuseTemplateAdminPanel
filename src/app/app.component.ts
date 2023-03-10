import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fuse-template1';
  showFiller = false;
  sideBarOpen = true;
  rightSideBar = false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  rightSidebarToggler() {
    this.rightSideBar = !this.rightSideBar;
  }
}
