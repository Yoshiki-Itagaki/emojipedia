import React from "react";

function Entry(props){
    return (<div className="term">
            <dt>
            <p>{props.id}</p>
            <span className="emoji" role="img" aria-label={props.name}>
                {props.emoji}
            </span>
            <span>{props.name}</span>
            </dt>
            <dd>
                {props.meaning}
            </dd>
          </div>); 
}

export default Entry