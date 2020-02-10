import React, { Component } from 'react';
import Datatable from '../components/Datatable';
import {fetchStatsDaily} from '../apis/product';

export default class DataTableSection extends Component {
    constructor(){
        super();
        this.state= {
            data: [],
            columns: [
                {
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
                }
            ]
        }
    }

    componentDidMount(){
        fetchStatsDaily()
        .then(data => {
            console.log(data)
            let statsData= [];
            data.forEach((e)  => {
                statsData.push({
                    date:this.formatDate(e.date), 
                    impressions:e.impressions, 
                    clicks:e.clicks,
                    revenue:e.revenue })
            });
            this.setState({
                data: statsData
            })
        })
    }

    formatDate = inputDate => inputDate.split('T')[0];
    render() {
        return (
            <div className='cardEffect'>
                {/* <h1>Data Table </h1> */}
                <Datatable data={this.state.data} columns={this.state.columns}/>
            </div>
        )
    }
}