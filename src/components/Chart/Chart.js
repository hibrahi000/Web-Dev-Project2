import React, { Component } from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';

class Chart extends Component {
    
    render() {
      const pieData = {
        labels: [
          'Male Deaths',
          'Female Deaths',
          'Total Deaths'
        ],
        datasets: [{
          data: [this.props.maleDeaths, this.props.femaleDeaths, this.props.totalDeaths],
          backgroundColor: [
          'blue',
          'red',
          'yellow'
          ],
          hoverBackgroundColor: [
          '#36A2EB',
          '#FF6384',
          '#FFCE56'
          ]
        }]
      };
        const lineData = {
            labels: this.props.years,
            datasets: [
              {
                label: "Leading Cause of Death in New York City",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'red',
                borderColor: 'red',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'red',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'black',
                pointHoverBorderColor: 'black',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.numberOfDeaths // Y axis
              }
            ]
          };
          const barData = {
            labels: this.props.years,
            datasets: [
              {
                label: 'Leading Cause of Death in New York City',
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: this.props.numberOfDeaths
              }
            ]
          };
        return (
            <div>
                <div>
                  <Line data={lineData} />
                </div>
                <div>
                  <Bar data={barData} />
                </div>
                <div>
                  <Pie data={pieData} />
                </div>
            </div>
        )
    }
}

export default Chart