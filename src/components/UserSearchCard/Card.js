import React, { Component } from 'react';
import CardBtn from './CardBtn/CardBtn';
import axios from 'axios';
import './Card.css'

class UserSearchCard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div
          className="searchCard"
          style={{
      backgroundImage: this.props.image ? `url(${this.props.image})` : "none"
    }}
  >
    {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        <CardBtn
          style={{ opacity: this.props.image ? 1 : 0 }}
          onClick={this.props.handleBtnClick}
          data-value="pass"
        />
        <CardBtn
          style={{ opacity: this.props.image ? 1 : 0 }}
          onClick={this.props.handleBtnClick}
          data-value="pick"
        />
     </div>
   </div>
   );
  }
}
export default UserSearchCard;
