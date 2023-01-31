import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleSidebarRightSidebarForMe: EventEmitter<any> =
    new EventEmitter();

  constructor() {}
  isFullScreen = false;
  toggleSideNav() {
    this.toggleSidebarForMe.emit();
  }
  toggleRightSideMenu() {
    this.toggleSidebarRightSidebarForMe.emit();
  }
  makeFullScreen() {
    if (this.isFullScreen) {
      document.exitFullscreen();
      this.isFullScreen = false;
    } else {
      document.body.requestFullscreen();
      this.isFullScreen = true;
    }
  }

  ngOnInit() {}
}
