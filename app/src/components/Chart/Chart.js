import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    
    render() {
        const data = {
            labels: this.props.years,
            datasets: [
              {
                label: "Leading Cause of Death In New York City",
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
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.numberOfDeaths // Y axis
              }
            ]
          };
        return (
            <div>
                <Line data={data} />
            </div>
        )
    }
}

export default Chart