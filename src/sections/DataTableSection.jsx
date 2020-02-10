import React, { Component } from 'react';
import Datatable from '../components/Datatable';
import {fetchStatsDaily, fetchStatsHourly} from '../apis/product';

export default class DataTableSection extends Component {
    constructor(){
        super();
        this.state= {
            data: [],
            columns: [],
            dataFrequencyType: 'daily',
            title: 'Daily statistics'
        }
    }

    componentDidMount(){
        this.getDailyStatsData()
    }

    componentDidUpdate(){
        if (this.state.dataFrequencyType==='hourly'){
            this.getHourlyStatsData();
        }
        else {
            this.getDailyStatsData();
        }
    }

    getDailyStatsData(){
        fetchStatsDaily()
        .then(data => {
            let statsData= [];
            let statsColumns= [{
                name: 'date',
                selector: 'date',
                sortable: true,
            },
            {
                name: 'impressions',
                selector: 'impressions',
                sortable: true
            },
            {
                name: 'clicks',
                selector: 'clicks',
                sortable: true
            },
            {
                name: 'revenue',
                selector: 'revenue',
                sortable: true
            }];
            data.forEach((e)  => {
                statsData.push({
                    date: this.formatDate(e.date), 
                    impressions: e.impressions, 
                    clicks: e.clicks,
                    revenue: e.revenue })
            });
            this.setState({
                data: statsData,
                columns: statsColumns,
                title: 'Daily statistics'
            })
        })
    }

    getHourlyStatsData(){
        fetchStatsHourly()
        .then(data => {
            let statsColumns= [{
                name: 'date',
                selector: 'date',
                sortable: true,
            },
            {
                name: 'hour',
                selector: 'hour',
                sortable: true
            },
            {
                name: 'impressions',
                selector: 'impressions',
                sortable: true
            },
            {
                name: 'clicks',
                selector: 'clicks',
                sortable: true
            },
            {
                name: 'revenue',
                selector: 'revenue',
                sortable: true
            }];
            let statsData= [];
            data.forEach((e)  => {
                statsData.push({
                    date: this.formatDate(e.date), 
                    impressions: e.impressions, 
                    clicks: e.clicks,
                    revenue: e.revenue, 
                    hour: e.hour})
            });
            this.setState({
                data: statsData,
                columns: statsColumns,
                title: 'Hourly statistics'
            })
        })
    }

    handleChangeDataFrequencyType = (event) => {
        this.setState({
            dataFrequencyType: event.target.value,
        })
    }

    formatDate = inputDate => inputDate.split('T')[0];

    render() {
        return (
            <div className='cardEffect' id='scrollTable'>
                <h1>Display</h1>
                <label>
                    <input
                        type="radio"
                        value="daily"
                        onChange={this.handleChangeDataFrequencyType}
                        checked={this.state.dataFrequencyType === 'daily'}
                    />
                    Daily statistics 
                </label>
                <label>
                    <input
                        type="radio"
                        value="hourly"
                        onChange={this.handleChangeDataFrequencyType}
                        checked={this.state.dataFrequencyType === 'hourly'}
                    />
                    Hourly statistics
                </label>
                <Datatable data={this.state.data} columns={this.state.columns} title={this.state.title}/>
            </div>
        )
    }
}