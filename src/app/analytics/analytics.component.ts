import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  currURL = '';
  constructor(private router: Router) {
    // private member of Router
    const currentPageUrl = router.url; // router.url contain the active route info
    this.currURL = currentPageUrl;
    console.log(currentPageUrl);
  }
  ngOnInit(): void {
    this.analyticsChart();
    this.conversionChart();
    this.impressionsChart();
    this.visitsChart();
    this.visitorsVSpageViewChart();
  }

  analyticsChart() {
    var options = {
      series: [
        {
          name: 'Visitors',
          data: [
            2058,
            2139,
            1323,
            314,
            3922,
            ,
            932,
            3737,
            122,
            2774,
            1289,
            4076,
            3232,
            2798,
            595,
            836,
            336,
            3992,
            386,
            2062,
            2070,
            1280,
            2094,
            1310,
            1360,
            1589,
            260,
            1979,
            329,
            4001,
            562,
            3919,
            2580,
            1135,
            3447,
            2328,
            1131,
            4003,
            3619,
            3461,
            3346,
            3680,
            609,
            2057,
            2633,
            1291,
            3390,
            3612,
            208,
            583,
            3516,
            2006,
            62,
            3636,
            3139,
            1732,
            1315,
            358,
            3044,
            3371,
            842,
            3367,
            3501,
            2501,
            822,
            3162,
            2777,
            2882,
            1196,
            7,
            180,
            2512,
            2739,
            3234,
            3319,
            2906,
            2920,
            146,
            3447,
            2636,
            3837,
            1749,
            2703,
            3048,
            1997,
            3471,
            1405,
            3402,
            1741,
            1795,
            1152,
            2786,
            1194,
            1580,
            1546,
            1333,
            3548,
            3356,
            493,
            3460,
            881,
            1915,
            3508,
            1397,
            3454,
            130,
            1721,
            593,
            2546,
            3842,
            118,
            3346,
            1714,
            839,
            4004,
            3907,
            1377,
            1407,
            875,
            3458,
            2228,
            3800,
            2391,
            248,
            718,
            2125,
            695,
            3360,
            3802,
            1405,
            732,
            264,
            3096,
            1871,
            1150,
            3854,
            4048,
            1953,
            502,
            2822,
            183,
            3535,
            1364,
            1644,
            2035,
            427,
            2962,
            1822,
            1150,
            1832,
            3944,
            3719,
            2316,
            665,
            1532,
            53,
            2706,
            967,
            4151,
            2338,
            2356,
            2775,
          ],
        },
      ],
      chart: {
        type: 'area',
        stacked: false,
        height: 320,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      colors: ['#818CF8'],
      fill: {
        colors: ['#818CF8'],
        opacity: 0.5,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        show: true,
        yaxis: {
          lines: {
            show: true, //or just here to disable only y axis
          },
        },
      },
      labels: [
        '21 Mar 2001',
        '21 Apr 2001',
        '21 May 2001',
        '21 jun 2001',
        '21 Jul 2001',
        '21 Aug 2001',
        '21 Sep 2001',
        '21 Oct 2001',
        '21 Nov 2001',
        '21 Dec 2001',
      ],
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#ccc',
          },
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelectorAll('.analytics-chart')[0],
      options
    );
    chart.render();
  }
  conversionChart() {
    var options = {
      series: [
        {
          name: 'Conversions',
          data: [312, 435, 541, 77, 422, 123],
        },
      ],
      chart: {
        type: 'area',
        stacked: true,
        height: 110,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      colors: ['#38BDF8'],
      fill: {
        colors: ['#38BDF8'],
        opacity: 0.5,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      stroke: {
        curve: 'smooth',
      },

      labels: [
        '21 Jan 2001',

        '21 Feb 2001',
        '21 Mar 2001',
        '21 Apr 2001',
        '21 May 2001',
        '21 Jun 2001',
      ],
      grid: {
        show: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelector('.conversions-chart'),
      options
    );
    chart.render();
  }
  impressionsChart() {
    var options = {
      series: [
        {
          name: 'Impressions',
          data: [312, 435, 541, 77, 200, 123],
        },
      ],
      chart: {
        type: 'area',
        stacked: true,
        height: 110,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      colors: ['#34D399'],
      fill: {
        colors: ['#34D399'],
        opacity: 0.5,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      stroke: {
        curve: 'smooth',
      },

      labels: [
        '21 Jan 2001',

        '21 Feb 2001',
        '21 Mar 2001',
        '21 Apr 2001',
        '21 May 2001',
        '21 Jun 2001',
      ],
      grid: {
        show: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelector('.impressions-chart'),
      options
    );
    chart.render();
  }
  visitsChart() {
    var options = {
      series: [
        {
          name: 'Visits',
          data: [312, 405, 741, 77, 412, 123],
        },
      ],
      chart: {
        type: 'area',
        stacked: true,
        height: 110,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      colors: ['#FB7185'],
      fill: {
        colors: ['#FB7185'],
        opacity: 0.5,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: true,
        theme: 'dark',
      },
      stroke: {
        curve: 'smooth',
      },

      labels: [
        '21 Jan 2001',

        '21 Feb 2001',
        '21 Mar 2001',
        '21 Apr 2001',
        '21 May 2001',
        '21 Jun 2001',
      ],
      grid: {
        show: false,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelector('.visits-chart'),
      options
    );
    chart.render();
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
        height: 300,
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
      colors: ['#69798F', '#69798F'],
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
      document.querySelector('#visitors-vs-page-view-chart'),
      options
    );
    chart.render();
  }
}
