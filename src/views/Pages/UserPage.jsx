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

class UserPage extends Component {
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
                      ncols={['col-md-12']}
                      proprieties={[
                        {
                          label: 'Email address',
                          type: 'email',
                          bsClass: 'form-control',
                          placeholder: 'YouCantSeeMe@wwe.com',
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'First name',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'John',
                          defaultValue: 'John',
                        },
                        {
                          label: 'Last name',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Cena',
                          defaultValue: 'Cena',
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'Password',
                          type: 'Password',
                          bsClass: 'form-control',
                          placeholder: '*********',
                          defaultValue: 'Password',
                        },
                        {
                          label: 'Confirm Password',
                          type: 'Password',
                          bsClass: 'form-control',
                          placeholder: '*********',
                          defaultValue: 'Password',
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-12']}
                      proprieties={[
                        {
                          label: 'Address',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Home Adress',
                          defaultValue: 'West Newbury',
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-4', 'col-md-4', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'City',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Massachusetts',
                          defaultValue: 'Massachusetts',
                        },
                        {
                          label: 'Country',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'USA',
                          defaultValue: 'USA',
                        },
                        {
                          label: 'Postal Code',
                          type: 'number',
                          bsClass: 'form-control',
                          placeholder: '01922',
                        },
                      ]}
                    />

                    <div className="row">
                      <div className="col-md-12">
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="I got my soul straight, I brush your mouth like Colgate, You can't see me, my time is now" />
                        </FormGroup>
                      </div>
                    </div>
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                    >
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="John Cena"
                userName="Mr.Invisible"
                description={
                  <span>
                    "I got my soul straight,
                                        <br />
                    I brush your mouth like Colgate,
                                        <br />
                    You can't see me, my time is now"
                  </span>
                }
                socials={
                  <div>
                    <Button simple><i className="fa fa-facebook-square" /></Button>
                    <Button simple><i className="fa fa-twitter" /></Button>
                    <Button simple><i className="fa fa-google-plus-square" /></Button>
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
