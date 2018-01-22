import React from 'react';
import {
    Row, Col,
    FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';
// react component that creates a dropdown menu for selection
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
    selectOptions
} from 'variables/Variables.jsx';

class ShelterStep2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Street1: "",
            Street2: "",
            ShelterCity: "",
            ShelterState: "",
            ShelterStateSelect: "",
            shelterZipCode: "",
            phoneNumber: "",
            type_textError: null,
            type_numberError: null
        }
    }
    handleTypeValidation() {
        this.state.type_text === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
        const digitRex = /^\d+$/;

        digitRex.test(this.state.type_number) === false ? this.setState({ type_numberError: (<small className="text-danger">type_number has to be a number.</small>) }) : this.setState({ type_numberError: null });
    }
    render() {
        return (
            <div className="wizard-step">
                <h5 className="text-center">Please give us more details about your location</h5>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Street Name<span className="text-danger">*</span></ControlLabel>
                            <FormControl type="text" name="Street1" placeholder="" onChange={(event) => {
                                this.setState({ type_text: event.target.value });
                                event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                            />
                            {this.state.type_textError}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} mdOffset={1}>
                        <FormGroup>
                            <ControlLabel>Street Name 2</ControlLabel>
                            <FormControl type="text" name="Street1" placeholder=""
                            />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <ControlLabel>City<span className="text-danger">*</span></ControlLabel>
                            <FormControl type="text" name="ShelterCity" placeholder="" onChange={(event) => {
                                this.setState({ ShelterCity: event.target.value });
                                event.target.value === '' ? this.setState({ type_textError: (<small className="text-danger">Text is required.</small>) }) : this.setState({ type_textError: null });
                            }}
                            />
                            {this.state.type_textError}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} mdOffset={1}>
                        <FormGroup>
                        <ControlLabel>State</ControlLabel>
                        <Select
                            name="ShelterState"
                            value={this.state.ShelterStateSelect}
                            options={[
                                {value: 1,label:"AL"},
                                {value: 2,label:"AK"},
                                {value: 3,label:"AZ"},
                                {value: 4,label:"AR"},
                                {value: 5,label:"CA"},
                                {value: 6,label:"CO"},
                                {value: 7,label:"CT"},
                                {value: 8,label:"DE"},
                                {value: 9,label:"FL"},
                                {value: 10,label:"GA"},
                                {value: 11,label:"HI"},
                                {value: 12,label:"ID"},
                                {value: 13,label:"IL"},
                                {value: 14,label:"IN"},
                                {value: 15,label:"IA"},
                                {value: 16,label:"KS"},
                                {value: 17,label:"KY"},
                                {value: 18,label:"LA"},
                                {value: 19,label:"ME"},
                                {value: 20,label:"MD"},
                                {value: 21,label:"MA"},
                                {value: 22,label:"MI"},
                                {value: 23,label:"MN"},
                                {value: 24,label:"MS"},
                                {value: 25,label:"MO"},
                                {value: 26,label:"MT"},
                                {value: 27,label:"NE"},
                                {value: 28,label:"NV"},
                                {value: 29,label:"NH"},
                                {value: 30,label:"NJ"},
                                {value: 31,label:"NM"},
                                {value: 32,label:"NY"},
                                {value: 33,label:"NC"},
                                {value: 34,label:"ND"},
                                {value: 35,label:"OH"},
                                {value: 36,label:"OK"},
                                {value: 37,label:"OR"},
                                {value: 38,label:"PA"},
                                {value: 39,label:"RI"},
                                {value: 40,label:"SC"},
                                {value: 41,label:"SD"},
                                {value: 42,label:"TN"},
                                {value: 43,label:"TX"},
                                {value: 44,label:"UT"},
                                {value: 45,label:"VT"},
                                {value: 46,label:"VA"},
                                {value: 47,label:"WA"},
                                {value: 48,label:"WV"},
                                {value: 49,label:"WI"},
                                {value: 50,label:"WY"},
                            ]}
                            onChange={(value) => this.setState({ ShelterStateSelect: value})}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <ControlLabel>Zip Code <span className="text-danger">*</span></ControlLabel>
                            <FormControl
                                type="number"
                                name="shelterZipCode"
                                onChange={(event) => {
                                    this.setState({ shelterZipCode: event.target.value });
                                    const digitRex = /^\d+$/;
                                    digitRex.test(event.target.value) === false ? this.setState({ type_numberError: (<small className="text-danger">type_number has to be a number.</small>) }) : this.setState({ type_numberError: null });
                                }}
                            />
                            {this.state.type_numberError}
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ShelterStep2;
