import React from 'react';
//props is an object, and we are taking the property of the tilte in a different file
export default function(props){
    return(
        <div> 
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    );
}