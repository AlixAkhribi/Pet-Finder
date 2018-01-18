import React from 'react';
import PetModal from '../../components/Modals/PetModal';

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
      <button
        type="submit"
        className={window.location.pathname === './AddPetForm'}
        href="./AddPetForm"
        onClick={this.handleOnClickSubmit}
      >
        Add Pet
        <PetModal
          show={this.state.showModal}
          onHide={this.handleClose}
        />
      </button>
    );
  }
}

export default AddPetBtn;
