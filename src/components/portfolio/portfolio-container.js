import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';



//class 
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pagetitle: "welcome to my portfolio",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);
        //can also use arrow fuction: e=>this.x(e)
    }
    handleFilter(filter) {
        this.setState({
            //buttons to show only what has been clicked, this is the function
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }
    //pulling things from the API
    getPortfolioItems() {
        axios.get('https://malbarnard.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                // handle success
                this.setState({
                    data: response.data.portfolio_items
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }

    PortfolioItems() {
        //this functuion below is dynamic, saying for how may items in array, there will be that many portfolio items
        return this.state.data.map(item => { //name is a props, an object you can put into a different file, key is a props
            return <PortfolioItem key={item.id} item={item} />;
        })
    }
    //setting state and re rendering
    componentDidMount() {
        this.getPortfolioItems();
    }

    //rednering
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div className="big-wrapper">
                <div className="btn-wrapper">
                <button className="btn" onClick={() => this.handleFilter('Projects')}>Projects</button>
                <button className="btn" onClick={() => this.handleFilter('Languages')}>Languages</button>
                </div>
                <div className="portfolio-items-wrapper">{this.PortfolioItems()}</div>
            </div>
        )
    }
}