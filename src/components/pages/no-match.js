import React from 'react'
import { Link } from 'react-router-dom'
export default function (props) {
    return (
       <div>
           <h2>Sorry, we couldn't find that page</h2>
           <Link to="/">Return to homepage</Link>
       </div> 
    );
}