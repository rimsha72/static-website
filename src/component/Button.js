import React from 'react';


const Button = (props) => {
    return(
        <button className={`button ${props?.className}`}>{props?.title}</button>
    )
}


export default Button;