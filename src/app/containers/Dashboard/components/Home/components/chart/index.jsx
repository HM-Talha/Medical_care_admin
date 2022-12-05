import React from 'react';
import Chart from 'react-apexcharts';

const CustomChart = ({
  colors,
  series = [270, 390, 320, 670, 880, 400, 550],
  categories = ['6Feb', '7Feb', '8Feb', '9Feb', '10Feb', '11Feb', '12Feb'],
}) => {
  const chartOptions = {
    series: [
      {
        data: series,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      ...(colors && {
        colors,
      }),
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories,
        labels: {
          style: {
            color: '#999999',
            fontSize: '8px',
          },
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        axisTicks: {
          show: true,
        },
      },
    },
  };
  return (
    <div dir="ltr">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

export default CustomChart;
