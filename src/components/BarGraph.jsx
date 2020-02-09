import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends Component {
    render() {
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    label: 'Events',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                    data: this.props.data
                }
            ]
        };

        return (
            <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Events per day',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        )
    }
}
