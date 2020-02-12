import React, { Component } from 'react';
import LineGraph from '../components/LineGraph';
import { fetchEventDailyData, fetchEventHourlyData } from '../apis/product';

export default class DataChartSection extends Component {
    constructor() {
        super();
        this.state = {
            dataFrequencyType: 'daily',
            label: [],
            data: [],
            title: 'Daily events',
            date: []
        }
    }

    componentDidMount(){
        this.getDailyEventsData()
    }

    getHourlyEventsData = () => {
        fetchEventHourlyData()
        .then(eventdata => {
            // console.log(eventdata)
            let eventhour = [];
            let eventnum = [];
            let eventdate = [];
            eventdata.forEach((e) => {
                eventhour.push(e.hour)
                eventnum.push(e.events)
                eventdate.push(this.formatDate(e.date));
            });
            this.setState({
                label: eventnum,
                data:  eventhour
            })
        }) 
    }

    getDailyEventsData = () => {
        fetchEventDailyData()
        .then(eventdata => {
            // console.log(eventdata);
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

    switchData = () => {
        console.log(this.state.dataFrequencyType);
        if (this.state.dataFrequencyType ==='hourly'){
            this.getHourlyEventsData();
            console.log(this.state.dataFrequencyType);
        }
        else{
            this.getDailyEventsData();
            console.log(this.state.dataFrequencyType);
        }
    }

    handleChangeDataFrequencyType = (event) => {
        this.setState({
            dataFrequencyType: event.target.value
        }, this.switchData);

    }

    render() {
        return (
            <section className="cardEffect">
                <h2>Display</h2>
                <label>
                    <input
                        type="radio"
                        value="daily"
                        onChange={this.handleChangeDataFrequencyType}
                        checked={this.state.dataFrequencyType === 'daily'}
                    />
                    Daily events
                </label>
                <label>
                    <input
                        type="radio"
                        value="hourly"
                        onChange={this.handleChangeDataFrequencyType}
                        checked={this.state.dataFrequencyType === 'hourly'}
                    />
                    Hourly events
                </label>
                <LineGraph label={this.state.label} data={this.state.data} title={this.state.title}/>
            </section>
        )
    }
}
