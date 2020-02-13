import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineGraph extends Component {
    render() {
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    label: 'EVENTS',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: '#5D737E',
                    borderWidth: 2,
                    data: this.props.data
                }
            ],
            title: this.props.title,
            xAxisLabel: this.props.xAxisLabel
        };

        return (
            <div>
            <h1>{data.title}</h1>
            <Line
                data={data}
                options={{
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Event number'
                              }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: `${data.xAxisLabel}`
                              }
                        }]
                    }
                }}
            />

            </div>
        )
    }
}
