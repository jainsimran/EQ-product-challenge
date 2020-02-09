import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';

export default class LineGraph extends Component {
    render() {
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    label: 'Events',
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
            <Line
                data={data}
                options={{
                    title: {
                        display: true,
                        text: `${data.title}`,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                        rangeMin: {
                            x: 20,
                            y: 20
                        },
                        rangeMax: { 
                            x: 40,
                            y: 40
                        },
                        speed: 0.5
                    },
                    zoom: {
                        enabled: true,
                        mode: 'x',
                        rangeMin: {
                            x: 15,
                            y: 10
                        },
                        rangeMax: { 
                            x: 20,
                            y: 20
                        },
                        speed: 0.5
                    }


                }}
            />
        )
    }
}
