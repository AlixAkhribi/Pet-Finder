import React, { Component } from 'react';
import {
  Grid, Row, Col,
  Form, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class AddPetForm extends Component {
  constructor(props) {
    super(props)
    this.vForm = this.refs.vForm;
    this.state = {
      // Pet Form // 
      shelter: '',
      zipcode: '',
      image: '',
      name: '',
      breed: '',
      type: '',
      age: '',
      description: '',
      zipcodeError: null,
      ageError: null,
      descriptionError: null,

      // Type // 
      type_age: '',
      type_ageError: null,
      type_text: '',
      type_textError: null,
      type_number: '',
      type_numberError: null,
      type_url: '',
      type_urlError: null,
      type_source: '',
      type_sourceError: null,
      type_destination: '',
      type_destinationError: null,
    };
  }
  handleZipcodeCheck(event) {
    this.setState({
      zipcode: event.target.value,
    });
    event.target.value.length < 5 ? this.setState({ zipcodeError: (<small className="text-danger">Zip Code must be 5 numbers</small>) }) : this.setState({ zipcodeError: null });
  }
  handleAgeCheck(event) {
    this.setState({
      type_age: event.target.value,
    });
    event.target.value.length < 3 ? this.setState({
      type_ageError: (<small className="text-danger">Age cannot be more than 3 numbers</small>)
    }) : this.setState({
      type_ageError: null
    }
  );
  }
  handleDescriptionCheck(event) {
    this.setState({
      description: event.target.value
    });
    event.target.value.length < 20 ? this.setState({
      descriptionError: (<small className="text-danger">Description must be at least 20 characters</small>)
    }) : this.setState({
      descriptionError: null
    });
  }
  handleTypeValidation() {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailRex.test(this.state.type_email) === false ? this.setState({ type_emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }) : this.setState({ type_emailError: null });
    this.state.type_text === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
    const digitRex = /^\d+$/;
    digitRex.test(this.state.type_number) === false ? this.setState({ type_numberError: (<small className="text-danger"> Must be a number </small>) }) : this.setState({ type_numberError: null });
    const urlRex = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    urlRex.test(this.state.type_url) ? this.setState({ type_urlError: null }) : this.setState({ type_urlError: (<small className="text-danger">Must be a valid URL!</small>) });
    this.state.type_source === '' ? this.setState({ type_sourceError: (<small className="text-danger">IdSource is required</small>) }) : this.setState({ type_sourceError: null });
    this.state.type_source === this.state.type_destination ? this.setState({ type_destinationError: null }) : this.setState({ type_destinationError: (<small className="text-danger">IdSource mismatch!</small>) });
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Form horizontal>
                <Card
                  title={
                    <legend>Enter Needed Information</legend>
                  }
                  content={
                    <div>
                    <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Shelter
            </Col>
                    <Col sm={6}>
                      <FormControl
                        type="text"
                        name="type_text"
                        onChange={(event) => {
                          this.setState({ type_text: event.target.value });
                          event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                        }}
                      />
                      {this.state.type_textError}
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Animal Type
            </Col>
                    <Col sm={6}>
                      <FormControl
                        type="text"
                        name="type_text"
                        onChange={(event) => {
                          this.setState({ type_text: event.target.value });
                          event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                        }}
                      />
                      {this.state.type_textError}
                    </Col>
                  </FormGroup>
                      <FormGroup controlId="formHorizontalRequiredText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Name
                  </Col>
                        <Col sm={6}>
                          <FormControl
                            type="text"
                            name="type_text"
                            onChange={(event) => {
                              this.setState({ type_text: event.target.value });
                              event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                          />
                          {this.state.type_textError}
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Breed
                </Col>
                        <Col sm={6}>
                          <FormControl
                            type="text"
                            name="type_text"
                            onChange={(event) => {
                              this.setState({ type_text: event.target.value });
                              event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                          />
                          {this.state.type_textError}
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Animal Type
                </Col>
                        <Col sm={6}>
                          <FormControl
                            type="text"
                            name="type_text"
                            onChange={(event) => {
                              this.setState({ type_text: event.target.value });
                              event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                          />
                          {this.state.type_textError}
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Age
                </Col>
                        <Col sm={6}>
                          <FormControl
                            type="number"
                            name="type_age"
                            onChange={event => this.handleAgeCheck(event)} />
                          {this.state.handleAgeCheck}
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Zip Code
              </Col>
                        <Col sm={6}>
                          <FormControl
                            type="number"
                            name="zipcode"
                            onChange={event => this.handleZipcodeCheck(event)} />
                            {this.state.handleZipcodeCheck}
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                          Description
                </Col>
                        <Col sm={6}>
                          <FormControl
                            type="text"
                            name="type_text"
                            onChange={(event) => {
                              this.setState({ type_text: event.target.value });
                              event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                          />
                          {this.state.type_textError}
                        </Col>
                      </FormGroup>


                    </div>
                  }
                  ftTextCenter
                  legend={
                    <Button fill bsStyle="info" type="submit" onClick={this.handleTypeValidation.bind(this)}>Submit</Button>
                  }
                />
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default AddPetForm;

















// export default class AddPetForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.vForm = this.refs.vForm;
//     this.state = {
//       shelter: '',
//       name: '',
//       type: '',
//       age: '',
//       description: '',
//       password: '',
//     };
//     this.change = this.change.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   change(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   onSubmit(e) {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       shelter: '',
//      / zipcode: '',
//       image: '',
//      / name: '',
//      / breed: '',
//      / type: '',
//      / age: '',
//       description: '',
//       password: '',
//     });
//   }

//   render() {
//     return (
//       <div onClick={e => e.stopPropagation()}>
//         <form>
//           <input
//             name="shelter"
//             placeholder="Shelter Name"
//             value={this.state.shelter}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="zipcode"
//             placeholder="Enter Zipcode"
//             value={this.state.zipcode}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="image"
//             placeholder="Upload Image"
//             value={this.state.image}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="name"
//             placeholder="Pet Name"
//             value={this.state.name}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="breed"
//             placeholder="Enter Breed"
//             value={this.state.breed}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="type"
//             placeholder="Type of Pet"
//             value={this.state.type}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="age"
//             placeholder="Age of Pet"
//             value={this.state.age}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="description"
//             placeholder="Description of Pet"
//             value={this.state.description}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <input
//             name="password"
//             type="password"
//             placeholder="Enter Password"
//             value={this.state.password}
//             onChange={e => this.change(e)}
//           />
//           <br />
//           <button onClick={e => this.onSubmit(e)}> Submit </button>
//         </form>
//       </div>
//     );
//   }
// }
