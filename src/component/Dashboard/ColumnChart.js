import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      },
      series: [{
        name: 'Sales',
        data: [120, 110, 235, 50, 49, 60, 70, 91, 125, 150, 200, 220]
      }]
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}

export default ColumnChart;
