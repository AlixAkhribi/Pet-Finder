import React, { Component } from 'react';
// react component used to create charts
import SweetAlert from 'react-bootstrap-sweetalert';

import Button from 'elements/CustomButton/CustomButton.jsx';

class UserStep3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null,
            userImage: "",
            userDescription: "",
            UserGender: "",
            type_textError: null,
        }
    }
    isValidated() {
        return true;
    }
    handleTypeValidation() {
        this.state.type_text === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
        const digitRex = /^\d+$/;

        digitRex.test(this.state.type_number) === false ? this.setState({ type_numberError: (<small className="text-danger">type_number has to be a number.</small>) }) : this.setState({ type_numberError: null });
    }
    successAlert() {
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{ display: "block", marginTop: "-100px" }}
                    title="Good job!"
                    onConfirm={() => this.setState({ alert: null })}
                    onCancel={() => this.setState({ alert: null })}
                    confirmBtnBsStyle="info"
                >
                    Thank you!
                </SweetAlert>
            )
        });
    }

    render() {
        return (
            <div className="wizard-step">
                <Row>
                    <Col md={5} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Profile Photo<span className="text-danger">*</span></ControlLabel>
                            <FormControl type="text" name="userImage" placeholder="" onChange={(event) => {
                                this.setState({ userImage: event.target.value });
                                event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                            />
                            {this.state.type_textError}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <FormGroup>
                            <ControlLabel>Gender</ControlLabel>
                            <Select
                                name="UserGender"
                                value={this.state.UserStateSelect}
                                options={[
                                    { value: 1, label: "Male" },
                                    { value: 2, label: "Female" },
                                    { value: 3, label: "Other" },
                                ]}
                                onChange={(value) => this.setState({ UserGender: value })}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Description<span className="text-danger">*</span></ControlLabel>
                            <FormControl type="text" name="userImage" placeholder="" onChange={(event) => {
                                this.setState({ userImage: event.target.value });
                                event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                            />
                            {this.state.type_textError}
                        </FormGroup>
                    </Col>
                </Row>
                <h2 className="text-center text-space">
                    <br />
                    <small> Click on "<b>Finish</b>" to join our community</small>
                </h2>
                <div className="wizard-finish-button">
                    <Button bsStyle="info" fill wd onClick={this.successAlert.bind(this)} pullRight>Finish</Button>
                </div>
                {this.state.alert}
            </div>
        );
    }
}

export default UserStep3;
