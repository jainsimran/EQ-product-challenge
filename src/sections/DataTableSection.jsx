import React, { Component } from 'react';
import Datatable from '../components/Datatable';
import { fetchStatsDaily, fetchPoiAllMetrics } from '../apis/product';
import FuzzySearch from '../components/FuzzySearch';

export default class DataTableSection extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            columns: [],
            dataFrequencyType: 'hourly',
            title: 'Daily statistics'
        }
    }

    componentDidMount() {
        this.getDailyStatsData()
    }

    componentDidUpdate() {
        if (this.state.dataFrequencyType === 'hourly') {
            this.getHourlyStatsData();
        }
        else {
            this.getDailyStatsData();
        }
    }

    getDailyStatsData() {
        fetchStatsDaily()
            .then(data => {
                let statsData = [];
                let statsColumns = [{
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
                data.forEach((e) => {
                    statsData.push({
                        date: this.formatDate(e.date),
                        impressions: e.impressions,
                        clicks: e.clicks,
                        revenue: e.revenue
                    })
                });
                this.setState({
                    data: statsData,
                    columns: statsColumns,
                    title: 'Daily statistics'
                })
            })
    }

    getHourlyStatsData() {
        fetchPoiAllMetrics()
            .then(data => {
                let statsColumns = [
                    {
                        name: 'name',
                        selector: 'name'
                    },
                    {
                        name: 'date',
                        selector: 'date'
                    },
                    {
                        name: 'hour',
                        selector: 'hour'
                    },
                    {
                        name: 'impressions',
                        selector: 'impressions'
                    },
                    {
                        name: 'clicks',
                        selector: 'clicks'
                    },
                    {
                        name: 'revenue',
                        selector: 'revenue'
                    }];
                let statsData = [];
                data.forEach((e) => {
                    statsData.push({
                        name: e.name,
                        date: this.formatDate(e.date),
                        impressions: e.impressions,
                        clicks: e.clicks,
                        revenue: this.roundedRevenue(e.revenue),
                        hour: e.hour
                    })
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

    roundedRevenue = inputRevenue => inputRevenue.split('.')[0];

    render() {
        return (
            <section className='cardEffect' id='scrollTable'>
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
                {this.state.dataFrequencyType === 'hourly' ? <FuzzySearch/> : null}
                <Datatable data={this.state.data} columns={this.state.columns} title={this.state.title} />
            </section>
        )
    }
}