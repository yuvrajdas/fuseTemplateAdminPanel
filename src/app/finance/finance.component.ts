import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  transaction_id: number;
  date: string;
  name: string;
  amount: number;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_id: 1,
    date: 'Nov 24, 2019',
    name: 'Maura Carey',
    amount: -927.43,
    status: 'COMPLETED',
  },
  {
    transaction_id: 2,
    date: 'Dec 18, 2019',
    name: 'Nita Hebert',
    amount: -1042.82,
    status: 'COMPLETED',
  },
  {
    transaction_id: 3,
    date: 'Oct 08, 2019',
    name: 'Morgan Page',
    amount: 1358.75,
    status: 'COMPLETED',
  },
  {
    transaction_id: 4,
    date: 'Dec 25, 2019',
    name: 'Marsha Chambers',
    amount: 1828.16,
    status: 'PENDING',
  },
  {
    transaction_id: 5,
    date: 'Nov 29, 2019',
    name: 'Charmaine Jackson',
    amount: 1647.55,
    status: 'COMPLETED',
  },
];
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'transaction_id',
    'date',
    'name',
    'amount',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() {}

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.visitorsVSpageViewChart();
  }
  visitorsVSpageViewChart() {
    var options = {
      series: [
        {
          name: 'Page View',
          data: [101, 706, 53, 985, 706, 897, 778],
        },
        {
          name: 'Visitors',
          data: [101, 206, 309, 420, 650, 60, 970],
        },
      ],
      chart: {
        type: 'area',
        height: 200,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      colors: ['#667EEA', '#667EEA'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.2,
          opacityTo: 0.9,
        },
      },
      legend: {
        show: false,
      },

      xaxis: {
        type: 'line',
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelector('#finance-card-right-chart'),
      options
    );
    chart.render();
  }
}
