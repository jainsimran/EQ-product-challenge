import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         labels: this.props.date,
    //         datasets: [
    //             {
    //                 label: 'Rainfall',
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: 'rgba(0,0,0,1)',
    //                 borderWidth: 2,
    //                 data: this.props.events
    //             }
    //         ]
    //     }
    // }

    render() {
        const data = {
            labels: this.props.date,
            datasets: [
                {
                    label: 'Events',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.props.events
                }
            ]
        };

        console.log(data);

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
