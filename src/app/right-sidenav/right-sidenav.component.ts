import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { contact } from '../constant/interface';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss'],
})
export class RightSidenavComponent implements OnInit {
  @Output() toggleSidebarRightSidebarForMe: EventEmitter<boolean> =
    new EventEmitter();
  constructor() {}
  selectedContact!: contact;
  inputValue!: string;
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
  messages = [
    {
      time: '18:56',
      messgeData: 'Hi!',
      me: true,
    },
    {
      time: '19:04',
      messgeData: 'Hey, dude!',
      me: false,
    },
    {
      time: '19:06',
      messgeData: 'Long time no see.',
      me: false,
    },
    {
      time: '19:07',
      messgeData: 'Yeah, man... Things were quite busy for me and my family.',
      me: true,
    },
    {
      time: '19:08',
      messgeData: "What's up? Anything I can help with?",
      me: false,
    },
    {
      time: '19:09',
      messgeData: "We've been on the move, changed 3 places over 4 months",
      me: true,
    },
    {
      time: '19:10',
      messgeData: "Wow! That's crazy! 🤯 What happened?",
      me: false,
    },
    {
      time: '19:11',
      messgeData:
        'You know I got a job in that big software company. First move was because of that.',
      me: true,
    },
    {
      time: '19:12',
      messgeData:
        'Which was an absolute pain because we just set up everything, house, kids school and all that.',
      me: true,
    },
    {
      time: '19:13',
      messgeData: 'So we moved the second time.',
      me: true,
    },
    {
      time: '19:14',
      messgeData: "It's crazy!",
      me: true,
    },
    {
      time: '19:15',
      messgeData:
        'Then this virus thing happened and just after a week we moved in, they decided the whole department will be working remotely.',
      me: true,
    },
    {
      time: '19:16',
      messgeData:
        "And then we decided to move back our first location because, you know, everything was already setup so that's the third time.",
      me: true,
    },
    {
      time: '19:17',
      messgeData:
        "Ohh dude, I'm really sorry you had to go through all that in such a short period of time",
      me: false,
    },
    {
      time: '19:18',
      messgeData: '😕',
      me: false,
    },
    {
      time: '19:19',
      messgeData:
        'Yeah dude. Hit me again next week so we can grab a coffee, remotely!',
      me: false,
    },
    {
      time: '19:20',
      messgeData: ':) Sure, man! See you next week!',
      me: true,
    },
    {
      time: '19:21',
      messgeData: 'See you later!',
      me: false,
    },
    {
      time: '19:22',
      messgeData:
        'Hey! Are you available right now? How about if we grab that coffee today? Remotely, of course :)',
      me: true,
    },
    {
      time: '19:23',
      messgeData: 'Hi!',
      me: false,
    },
    {
      time: '19:24',
      messgeData: "Sure thing! I'm gonna call you in 5, is it okay?",
      me: false,
    },
    {
      time: '19:25',
      messgeData: 'Awesome! Call me in 5 minutes..',
      me: true,
    },
    {
      time: '19:26',
      messgeData: '👍🏻',
      me: true,
    },
  ];
  ngOnInit(): void {
    this.selectedContact = this.contacts[6];
  }

  onContactSelected(selectedContact: contact) {
    console.log(selectedContact);
    this.selectedContact = selectedContact;
  }
  chatSidebar() {
    this.toggleSidebarRightSidebarForMe.emit();
  }
  sendMessage(event: any) {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let currentTime = `${hours}:${minutes}`;
    let msgData = {
      time: currentTime,
      messgeData: event?.target.value,
      me: true,
    };

    this.messages.push(msgData);
    this.inputValue = '';
  }
}
