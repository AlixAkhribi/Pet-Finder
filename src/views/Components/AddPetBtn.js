import React from 'react';
import PetModal from '../../components/Modals/PetModal';

import {
  ButtonGroup,
  Pagination,
  Grid, Row, Col
} from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton.jsx';

class AddPetBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOnClickSubmit() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
  handleClose() {
    this.setState({
      showModal: false,
    });
  }




  render() {
    return (
      <div className="content">
        <Button
          bsStyle="success" fill wd
          type="submit"
          onClick={this.handleOnClickSubmit}
        >
          Add Pet
        <PetModal
            show={this.state.showModal}
            onHide={this.handleClose}
          />
        </Button>
      </div>
    );
  }
}

export default AddPetBtn;
