import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom'

export default class LineGraph extends Component {
    render() {
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    label: this.props.metrics,
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.props.data
                }
            ],
            title: this.props.title
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
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                        rangeMin: {
                            x: 1
                        },
                        rangeMax: {
                            x: 1
                        },
                        speed: 0.05
                    },
                    zoom: {
                        enabled: true,
                        mode: 'x',
                        rangeMin: {
                            x: 9
                        },
                        rangeMax: { 
                            x: 1
                        },
                        speed: 0.05
                    }
                }}
            />

            </div>
        )
    }
}
