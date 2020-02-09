import React, { Component } from 'react';
import BarGraph from '../components/BarGraph';
import {fetchEventDailyData} from '../apis/product';

export default class DataChartSection extends Component {
    constructor(){
        super();
        this.state = {
            label: [],
            data: []
        }
    }
    componentDidMount(){
        fetchEventDailyData()
        .then(eventdata =>{
            console.log(eventdata);
            let eventdate = [];
            let eventnum = [];
            eventdata.forEach((e) => {
                eventdate.push(this.formatDate(e.date));
                eventnum.push(e.events)
            });
            this.setState({
                label: eventdate,
                data: eventnum
            })
        })
    }

    formatDate = inputDate => inputDate.split('T')[0];

    render() {
        return (
            <div>
                <BarGraph date={this.state.label} events={this.state.data}/>
               Hello data chart section 
            </div>
        )
    }
}
