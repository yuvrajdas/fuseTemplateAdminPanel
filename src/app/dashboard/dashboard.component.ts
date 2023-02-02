import { Component, OnInit } from '@angular/core';

import * as ApexCharts from 'apexcharts';
import { schdule } from '../constant/interface';

export enum Week_List {
  THIS_WEEK = 'this-week',
  LAST_WEEK = 'last-week',
}
export enum ScheduledData {
  TODAY = 'today',
  TOMORROW = 'tomorrow',
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  isActivesummary: string = Week_List.THIS_WEEK;
  isActiveTaskDistrubtion = Week_List.THIS_WEEK;
  isActiveSchedule: string = ScheduledData.TODAY;
  thisWeek = true;
  lastWeek = false;
  newIssue: number = 214;
  closed: number = 75;
  fixed: number = 3;
  wontfixed: number = 4;
  reopened: number = 8;
  needtriage: number = 6;
  closedIssueArray: number[] = [11, 10, 8, 11, 8, 10, 17];
  newIssueArray: number[] = [42, 28, 43, 34, 20, 25, 22];
  scheduledDataArrayObjs: schdule[] = [];
  newTask: number = 594;
  completedTask: number = 287;
  polarCharArray: number[] = [15, 20, 37, 28];
  home: boolean = true;
  budget: boolean = false;
  team: boolean = false;
  get weekList() {
    return Week_List;
  }
  get ScheduledData() {
    return ScheduledData;
  }
  scheduleDatas = [
    {
      scheduleName: 'Group Meeting',
      scheduleTime: 'in 32 minutes',
      scheduleLocation: 'Conference room 1B',
    },
    {
      scheduleName: 'Coffee Break',
      scheduleTime: '10:30 AM',
      scheduleLocation: '',
    },
    {
      scheduleName: 'Public Beta',
      scheduleTime: '11:00 AM',
      scheduleLocation: '',
    },
    {
      scheduleName: 'Lunch',
      scheduleTime: '12:10 PM',
      scheduleLocation: '',
    },
    {
      scheduleName: 'Dinner with David',
      scheduleTime: '05:30 PM',
      scheduleLocation: 'Magnolia',
    },
    {
      scheduleName: "Jane's Birthday Party",
      scheduleTime: '07:30 PM',
      scheduleLocation: 'Home',
    },
    {
      scheduleName: "Overseer's Retirement Party",
      scheduleTime: '09:30 PM',
      scheduleLocation: "Overseer's room",
    },
  ];
  setScheduledDatas(scheduleDataParam: string) {
    if (scheduleDataParam === ScheduledData.TODAY) {
      this.isActiveSchedule = ScheduledData.TODAY;
      this.scheduledDataArrayObjs = [
        {
          scheduleName: 'Group Meeting',
          scheduleTime: 'in 32 minutes',
          scheduleLocation: 'Conference room 1B',
        },
        {
          scheduleName: 'Coffee Break',
          scheduleTime: '10:30 AM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Public Beta',
          scheduleTime: '11:00 AM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Lunch',
          scheduleTime: '12:10 PM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Dinner with David',
          scheduleTime: '05:30 PM',
          scheduleLocation: 'Magnolia',
        },
        {
          scheduleName: "Jane's Birthday Party",
          scheduleTime: '07:30 PM',
          scheduleLocation: 'Home',
        },
        {
          scheduleName: "Overseer's Retirement Party",
          scheduleTime: '09:30 PM',
          scheduleLocation: "Overseer's room",
        },
      ];
    } else if (scheduleDataParam === ScheduledData.TOMORROW) {
      this.isActiveSchedule = ScheduledData.TOMORROW;
      this.scheduledDataArrayObjs = [
        {
          scheduleName: 'Marketing Meeting',
          scheduleTime: '09:00 AM',
          scheduleLocation: 'Conference room 1A',
        },
        {
          scheduleName: 'Public ',
          scheduleTime: '11:00 AM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Lunch',
          scheduleTime: '12:10 PM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Meeting with Beta Testers',
          scheduleTime: '03:00 PM',
          scheduleLocation: 'Conference room 2C',
        },
        {
          scheduleName: 'Live Stream',
          scheduleTime: '05:30 PM',
          scheduleLocation: '',
        },
        {
          scheduleName: 'Release Party',
          scheduleTime: '07:30 PM',
          scheduleLocation: "CEO's house",
        },
        {
          scheduleName: "CEO's Private Party",
          scheduleTime: '09:30 PM',
          scheduleLocation: "CEO's Penthouse",
        },
      ];
    }
  }
  makeActive(summaryTarget: string) {
    console.log('summaryTarget:', summaryTarget);
    if (summaryTarget === Week_List.LAST_WEEK) {
      this.isActivesummary = summaryTarget;
      this.newIssue = 197;
      this.closed = 72;
      this.fixed = 6;
      this.wontfixed = 11;
      this.reopened = 6;
      this.needtriage = 5;
      this.newIssueArray = [37, 32, 39, 27, 18, 24, 20];
      this.closedIssueArray = [11, 10, 8, 11, 8, 10, 17];
      // this.drawChart();
    } else if (summaryTarget === Week_List.THIS_WEEK) {
      this.isActivesummary = summaryTarget;
      this.newIssue = 214;
      this.closed = 75;
      this.fixed = 3;
      this.wontfixed = 4;
      this.reopened = 8;
      this.needtriage = 6;
      this.closedIssueArray = [11, 10, 8, 11, 8, 10, 17];
      this.newIssueArray = [42, 28, 43, 34, 20, 25, 22];
      // this.drawChart();
    }
    this.drawChart();
  }
  setTaskDistributionWeekList(taskDistribution: string) {
    this.polarCharArray = [];
    if (taskDistribution == this.weekList.LAST_WEEK) {
      this.isActiveTaskDistrubtion = this.weekList.LAST_WEEK;
      this.newTask = 526;
      this.completedTask = 260;
      this.polarCharArray = [16, 19, 23, 42];
      this.thisWeek = false;
      this.lastWeek = true;
    } else if (taskDistribution == this.weekList.THIS_WEEK) {
      this.isActiveTaskDistrubtion = this.weekList.THIS_WEEK;
      this.newTask = 594;
      this.completedTask = 287;
      this.polarCharArray = [15, 20, 37, 28];
      this.thisWeek = true;
      this.lastWeek = false;
    }
    this.drawPolarAreaChart();
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.drawChart();
    }, 500);
    this.setScheduledDatas(ScheduledData.TODAY);
  }
  ngAfterViewInit(): void {
    this.drawPolarAreaChart();
  }

  drawChart() {
    let options = {
      series: [
        {
          name: 'Closed Issue',
          type: 'column',
          data: this.closedIssueArray,
        },
        {
          name: 'New Issue',
          type: 'line',
          data: this.newIssueArray,
        },
      ],
      chart: {
        height: 310,
        type: 'line',
      },
      stroke: {
        width: [0, 5],
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yaxis: [
        {
          title: {
            // text: 'Closed Issue',
          },
        },
      ],

      colors: ['#a4b1c2', '#67768d'],
    };
    setTimeout(() => {
      var chart = new ApexCharts(
        document.querySelectorAll('.charts-container')[0],
        options
      );
      chart.render();
    }, 100);
  }
  get thisWeekValue() {
    return this.thisWeek;
  }
  get lastWeekValue() {
    return this.lastWeek;
  }
  drawPolarAreaChart() {
    let chart: any;

    var options = {
      series: this.polarCharArray,
      colors: ['#93c5fd', '#77a0ce', '#5c7b9e', '#1e293b'],
      chart: {
        type: 'polarArea',
      },
      labels: ['Issue', 'API', 'Backend', 'Frontend'],
      stroke: {
        colors: ['#fff'],
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      fill: {
        opacity: 0.8,
      },
      legend: {
        position: 'bottom',
      },
    };
    if (this.thisWeek) {
      setTimeout(() => {
        chart = new ApexCharts(
          document.querySelectorAll('#polarChartThisWeek')[0],
          options
        );
        chart.render();
      }, 500);
    } else if (this.lastWeek) {
      setTimeout(() => {
        chart = new ApexCharts(
          document.querySelectorAll('#polarChartLastWeek')[0],
          options
        );
        chart.render();
      }, 500);
    }
  }
  homeActionTab(actionTarget: string) {
    if (actionTarget == 'home') {
      this.home = true;
      this.budget = false;
      this.team = false;
      this.drawPolarAreaChart();
    } else if (actionTarget == 'budget') {
      this.home = false;
      this.budget = true;
      this.team = false;
    } else if (actionTarget == 'team') {
      this.home = false;
      this.budget = false;
      this.team = true;
    }
  }
}
