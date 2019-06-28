import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

//class 
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pagetitle: "welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "Quip", category: "eCommerce" },
                { title: "Eventbrite", category: "Scheduling" },
                { title: "Ministry Safe", category: "Enterprise" },
                { title: "Swing Away", category: "eCommerce" }
            ]
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

    PortfolioItems() {
        //this functuion below is dynamic, saying for how may items in array, there will be that many portfolio items
        return this.state.data.map(item => { //title is a props, an object you can put into a different file
            return <PortfolioItem title={item.title} url={"google.com"} key={item.title} />;
        })
    }
    //rednering
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pagetitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.PortfolioItems()}
            </div>
        )
    }
}