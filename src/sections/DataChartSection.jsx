import React, { Component } from 'react';
import LineGraph from '../components/LineGraph';
import { fetchEventDailyData, fetchEventHourlyData } from '../apis/product';

export default class DataChartSection extends Component {
    constructor() {
        super();
        this.state = {
            dataFrequencyType: 'daily',
            formattedData: null,
            label: [],
            data: [],
            title: 'Daily events',    
        }
    }

    componentDidMount() {
        this.getDailyEventsData();
    }

    getHourlyEventsData = () => {
        const mapEventsPerDate = {};
        fetchEventHourlyData()
            .then(eventdata => {
                // console.log(eventdata)
                // let eventhour = [];
                // let eventnum = [];
                // let eventdate = [];
                // eventdata.forEach((e) => {
                //     eventhour.push(e.hour)
                //     eventnum.push(e.events)
                //     eventdate.push(this.formatDate(e.date));
                // });
                // this.setState({
                //     label: eventnum,
                //     data:  eventhour,
                //     title: 'Hourly events'
                // })
                eventdata.map(item => {
                    // check if item.date already exist in mapEventsPerDate
                    // if yes, add {hour: item.hour, events: item.events} to the array
                    // else add a key item.date to the mapEventsPerDate and create an arry with {hour: item.hour, events: item.events}
                    const currentItemDate = item.date.split('T')[0];
                    if (mapEventsPerDate[currentItemDate]) {
                        const dateList = mapEventsPerDate[currentItemDate];
                        dateList.push({ hour: item.hour, event: item.events });
                        mapEventsPerDate[currentItemDate] = dateList;
                    } else {
                        mapEventsPerDate[currentItemDate] = [{ hour: item.hour, event: item.events }];
                    }
                });
                this.setState({
                    formattedData: mapEventsPerDate
                });
                console.log(mapEventsPerDate);
            });
    }

    getDailyEventsData = () => {
        fetchEventDailyData()
            .then(eventdata => {
                // console.log(eventdata);
                let eventdate = [];
                let eventnum = [];
                eventdata.forEach((e) => {
                    eventdate.push(this.formatDate(e.date));
                    eventnum.push(e.events);
                });
                this.setState({
                    label: eventdate,
                    data: eventnum,
                    title: 'Daily events'
                })
            })
    }

    formatDate = inputDate => inputDate.split('T')[0];

    switchData = () => {
        console.log(this.state.dataFrequencyType);
        if (this.state.dataFrequencyType === 'hourly') {
            this.getHourlyEventsData();
            console.log(this.state.dataFrequencyType);
        }
        else {
            this.getDailyEventsData();
            console.log(this.state.dataFrequencyType);
        }
    }

    handleChangeDataFrequencyType = (event) => {
        this.setState({
            dataFrequencyType: event.target.value
        }, this.switchData);

    }

    handleDateSelection = (event) => {
        console.log(event.target.value);
        const selectedDate = event.target.value;
        const eventsOnSelectedDate = this.state.formattedData[selectedDate];
        let newDateLabel = [];
        let newDateData = [];
        eventsOnSelectedDate.forEach((date) => {
            newDateLabel.push(date.hour);
            newDateData.push(date.event);
        });
        this.setState({
            label: newDateLabel,
            data: newDateData
        });
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
                {this.state.dataFrequencyType === 'hourly' && this.state.formattedData && (
                    <select
                        onChange={this.handleDateSelection}
                    >
                        {Object.keys(this.state.formattedData).map(dt => (
                            <option value={dt}>{dt}</option>
                        ))}
                    </select>
                )}

                <LineGraph label={this.state.label} data={this.state.data} title={this.state.title} />
            </section>
        )
    }
}
