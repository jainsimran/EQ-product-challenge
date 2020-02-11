import React, { Component } from 'react';
import {fetchPoiAllMetrics} from '../apis/product';

export default class FuzzySearch extends Component {
    constructor(){
        super();
        this.state = {
            searchInput: '',
            poiName: []
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    fetchNameData(){
        fetchPoiAllMetrics()
        .then(result => {
            let poiNameData = []
            result.forEach((e) =>{
                poiNameData.push(e)
            });
            this.setState({ poiName: poiNameData})
        })
    }

    fuzzySearch(){
        this.fetchNameData();
        this.state.poiName.filter((poi) =>{
            let poiName = poi.name.toLowerCase();
            console.log(poiName);
            return poiName;
        });
    }

    searchHandler(event){
        this.fuzzySearch();
        this.setState({ searchInput: event.target.value})
    }

    render() {
        return (
            <section className='searchBox'>
                Search location:
                <input 
                type='text' 
                value={this.state.searchInput}
                onChange={this.searchHandler}/>
            </section>
        )
    }
}
