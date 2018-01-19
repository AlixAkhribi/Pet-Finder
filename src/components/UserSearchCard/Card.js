import React from 'react';
import CardBtn from './CardBtn/CardBtn';
import axios from 'axios';


const UserSearchCard = props =>
  (<div
    className="searchCard"
  >
    <img
      src={props.image}
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pass"
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pick"
    />
   </div>);

export default UserSearchCard;
