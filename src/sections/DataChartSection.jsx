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
            title: 'Daily events'
        }
        this.getHourlyEventsData= this.getHourlyEventsData.bind(this);
        this.getDailyEventsData= this.getDailyEventsData.bind(this);
    }
    componentDidMount(){
        this.getDailyEventsData()
    }

    componentDidUpdate() {
        if (this.state.dataFrequencyType==='hourly'){
            this.getHourlyEventsData();
        }
        else {
            this.getDailyEventsData();
        }
    }

    getHourlyEventsData(){
        fetchEventHourlyData()
        .then(eventdata => {
            // console.log(eventdata)
            let eventhour = [];
            let eventnum = [];
            eventdata.forEach((e) => {
                eventhour.push(e.hour)
                eventnum.push(e.events)
            });
            this.setState({
                label: eventnum,
                data:  eventhour,
                title: 'Hourly events'
            })
        }) 
    }

    getDailyEventsData(){
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
                data: eventnum,
                titel: 'Daily events'
            })
        })
    }

    formatDate = inputDate => inputDate.split('T')[0];

    handleChangeDataFrequencyType = (event) => {
        this.setState({
            dataFrequencyType: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>Show</h1>
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
                        name="events"
                        value="hourly"
                        onChange={this.handleChangeDataFrequencyType}
                        checked={this.state.dataFrequencyType === 'hourly'}
                    />
                    Hourly events
                </label>
                <LineGraph label={this.state.label} data={this.state.data} title={this.state.title}/>
                Hello data chart section
            </div>
        )
    }
}
