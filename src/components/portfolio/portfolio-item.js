import React from 'react';
import { Link } from 'react-router-dom';
//props is an object, and we are taking the property of the tilte in a different file
export default function (props) {
    //data that we'll need
    // -background image: thumb_image_url
    // -logo
    // -description: description
    // -id: id
    //const is a var, inside render we are pulling things from the API
    const { id, description, thumb_image_url, logo } = props.item
    return (
        <div>
            <img src={thumb_image_url} />
            <div>{description}</div>
        <Link to={`/portfolio/${id}`}>Link</Link>
        </div >
    );
}