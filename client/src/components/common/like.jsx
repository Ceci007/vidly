import React from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked) classes += "-o";
    
    return (
        <i 
        onClick = {props.onClick} 
        className = {classes}
        aria-hidden = "true"
        style = {{cursor: 'pointer'}}
        ></i>
    );
}
 
export default Like;