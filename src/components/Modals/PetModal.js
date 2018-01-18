import { Modal } from 'react-bootstrap';
import AddPetForm from '../../views/Forms/AddPetForm';
import React from 'react';
import { Button } from 'react-bootstrap';

class PetModal extends React.Component {
  render() {
    return (
      <div className="petForm">  <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header onClick={e => e.stopPropagation()}>
          <Modal.Title id="contained-modal-title-lg" >Pet Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter Needed Information</h4>
          <AddPetForm onSubmit={(formData) => { console.log(formData); }} />
        </Modal.Body>
        <Modal.Footer onClick={e => e.stopPropagation()}>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
                                 </Modal>
      </div>
    );
  }
}

export default PetModal;
