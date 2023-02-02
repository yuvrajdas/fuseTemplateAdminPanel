import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-static-right-sidebar',
  templateUrl: './static-right-sidebar.component.html',
  styleUrls: ['./static-right-sidebar.component.scss'],
})
export class StaticRightSidebarComponent implements OnInit {
  @Output() toggleSidebarRightSidebarForMe: EventEmitter<any> =
    new EventEmitter();
  currURL = '';
  constructor(private router: Router) {
    // private member of Router
    const currentPageUrl = router.url; // router.url contain the active route info
    this.currURL = currentPageUrl;
  }
  contacts = [
    { name: 'Silva Foster', profile: 'assets/images/avatars/female-01.jpg' },
    { name: 'Nunez Faulkner', profile: 'assets/images/avatars/male-01.jpg' },
    { name: 'Earlene Rosales', profile: 'assets/images/avatars/female-02.jpg' },
    { name: 'Nunez Faulkner', profile: 'assets/images/avatars/male-02.jpg' },
    {
      name: 'Joseph Strickland',
      profile: 'assets/images/avatars/female-03.jpg',
    },
    { name: 'Silva Foster', profile: 'assets/images/avatars/male-03.jpg' },
    {
      name: 'Samantha Jacobson',
      profile: 'assets/images/avatars/female-05.jpg',
    },
    { name: 'Earlene Rosales', profile: 'assets/images/avatars/female-06.jpg' },
    {
      name: 'Francisca Perkins',
      profile: 'assets/images/avatars/female-07.jpg',
    },
    { name: 'Margo Witt', profile: 'assets/images/avatars/female-08.jpg' },
    {
      name: 'Madeleine Fletcher',
      profile: 'assets/images/avatars/female-09.jpg',
    },
    { name: 'Barber Johnson', profile: 'assets/images/avatars/female-10.jpg' },
    { name: 'Silva Foster', profile: 'assets/images/avatars/male-05.jpg' },
    { name: 'Nunez Faulkner', profile: 'assets/images/avatars/male-06.jpg' },
  ];
  ngOnInit(): void {}
}
