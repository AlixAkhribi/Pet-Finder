import React from 'react';


const CardBtn = props =>
  (<button
    onClick={props.onClick}
    className={`card-btn ${props['data-value']}`}
    {...props}
  />);

export default CardBtn;
