import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//props is an object, and we are taking the property of the tilte in a different file
export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({ portfolioItemClass: 'img-blur' });
    }

    handleMouseLeave() {
        this.setState({ portfolioItemClass: "" })
    }
    //data that we'll need
    // -background image: thumb_image_url
    // -logo
    // -description: description
    // -id: id
    //const is a var, inside render we are pulling things from the API
    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item
        return (
            <div className="portfolio-item-wrapper"
                // event listener, empty function, function is saying: "i do not want this event to occur until this listener is triggered"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div          //regular string below           when blur is triggerd this is added here and allows styling to happen
                    className={"portfolio-img-background " + this.state.portfolioItemClass}
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />
                <div className="image-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>
                    <div className="subtitle">
                        {description}
                    </div>
                </div>
            </div >
        );
    }
}