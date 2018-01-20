import React from 'react';
import {
    Row, Col,
    FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';


class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: null,
            shelterPhone: "",
            password: "",
            cfpassword: "",
            shelterName: '',
            shelterName_Error: null,
            type_numberError: null,
            
        }
    }
    isValidated() {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }) : this.setState({ emailError: null });
        return re.test(this.state.email);
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
        event.target.value.length < 6 ? this.setState({ passwordError: (<small className="text-danger">You must enter a password of at least 6 characters.</small>) }) : this.setState({ passwordError: null });
    }
    handleCfPasswordChange(event) {
        this.setState({
            cfpassword: event.target.value
        });
        event.target.value !== this.state.password ? this.setState({ cfpasswordError: (<small className="text-danger">Passwords do not match.</small>) }) : this.setState({ cfpasswordError: null });
    }
    handleRegisterSubmit() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>) }) : this.setState({ emailError: null });
        this.state.password.length < 6 ? this.setState({ passwordError: (<small className="text-danger">You must enter a password of at least 6 characters.</small>) }) : this.setState({ passwordError: null });
        this.state.cfpassword !== this.state.password ? this.setState({ cfpasswordError: (<small className="text-danger">Passwords do not match.</small>) }) : this.setState({ cfpasswordError: null });
      }
    render() {
        return (
            <div className="wizard-step">
                <h5 className="text-center">Please tell us about yourself.</h5>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Shelter name: <span className="star">*</span></ControlLabel>
                            <FormControl type="text" name="shelterName" placeholder="ex: Orange County Animal Shelter" 
                            onChange={(event) => {
                                this.setState({ shelterName: event.target.value });
                                event.target.value === '' ? this.setState({ shelterName_Error: (<small className="text-danger">Text is required.</small>) }) : this.setState({ shelterName_Error: null });
                            }}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Password: <span className="star">*</span></ControlLabel>
                            <FormControl type="password" name="password" onChange={(event) => this.handlePasswordChange(event)} />
                            {this.state.passwordError}
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <ControlLabel>Confirm password: <span className="star">*</span></ControlLabel>
                            <FormControl type="password" name="cfpassword" onChange={(event) => this.handleCfPasswordChange(event)} />
                            {this.state.cfpasswordError}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Email: <span className="text-danger">*</span></ControlLabel>
                            <FormControl type="email" name="email" placeholder="ex: hello@creative-tim.com" onChange={(event) => this.setState({ email: event.target.value })} />
                            {this.state.emailError}
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <ControlLabel>Phone Number: <span className="star">*</span></ControlLabel>
                            <FormControl type="number" name="shelterPhone" onChange={(event) => {
                                this.setState({shelterPhone: event.target.value});
                                var digitRex = /^\d+$/;
                                digitRex.test(event.target.value) === false ? this.setState({ type_numberError: (<small className="text-danger">Has to be a number</small>) }):this.setState({ type_numberError: null });
                            }}/>
                            {this.state.type_numberError}
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step1;
