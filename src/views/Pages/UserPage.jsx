import React, { Component } from 'react';
import {
    FormGroup, ControlLabel, FormControl,
    Grid, Row, Col,
} from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import UserCard from 'components/Card/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
// This is just a default for our User's Image. We need to have it be the user's uploaded image in production //
import avatar from 'assets/img/default-avatar.png';
import axios from 'axios';
class UserPage extends Component {
    state = {
        userFirstName: "",
        userLastName: "",
        userGender: "",
        userImage: "",
        userEmail: "",
        userPassword: "",
        userZipCode: "",
        userDescription: "",
    }
    handleSubmit = () => {
        console.log("Submit hit");
        console.log("company name", this.state.userFirstName);
        let userData = this.state;
        console.log("this is user data: ", userData);
        axios.post("/api/users/userPage/", userData).then(res => {
            console.log("res.data here: ", res.data);
            axios.get("/api/pets/getPet").then(res => {
                console.log("getPet response here: ", res.data[Math.floor(Math.random() * 7)].petImage);

            });
        });
    }
    render() {
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-5", "col-md-3", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "First Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "First Name",
                                                    disabled: false,
                                                    //value: this.state.userFirstName,
                                                    onChange: event => this.setState({ userFirstName: event.target.value })
                                                },
                                                {
                                                    label: "Last Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Last Name",
                                                    onChange: event => this.setState(
                                                        { userLastName: event.target.value })
                                                },
                                                {
                                                    label: "Gender",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Male/Female",
                                                    onChange: event => this.setState(
                                                        { userGender: event.target.value })
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6", "col-md-6"]}
                                            proprieties={[
                                                {
                                                    label: "Image",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Image",
                                                    onChange: event => this.setState(
                                                        { userImage: event.target.value })
                                                },
                                                {
                                                    label: "E-Mail",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "E-Mail",
                                                    onChange: event => this.setState(
                                                        { userEmail: event.target.value })
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    label: "Password",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Password",
                                                    onChange: event => this.setState(
                                                        { userPassword: event.target.value })
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-8"]}
                                            proprieties={[
                                                {
                                                    label: "Zip Code",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Zip Code",
                                                    onChange: event => this.setState(
                                                        { userZipCode: event.target.value })
                                                },
                                                {
                                                    label: "Description",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Describe Yourself!",
                                                    onChange: event => this.setState(
                                                        { userDescription: event.target.value })
                                                }
                                            ]}
                                        />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." />
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                            onClick={this.handleSubmit}
                                        >
                                            Update Profile
                                      </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Tania Andrew"
                                userName="tania123"
                                description={
                                    <span>
                                        "Lamborghini Mercy
                                      <br />
                                        Your chick she so thirsty
                                      <br />
                                        I'm in that two seat Lambo"
                                  </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default UserPage;
