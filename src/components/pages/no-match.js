import React from 'react'
import { Link } from 'react-router-dom'
export default function (props) {
    return (
       <div className='no-match'>
           <h2>Sorry, we couldn't find that page</h2>
           <div className="link-no-match">
           <Link to="/">Return to homepage</Link>
           </div>
       </div> 
    );
}