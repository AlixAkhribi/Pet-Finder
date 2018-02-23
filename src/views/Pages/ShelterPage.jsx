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
import avatar from 'assets/img/animal-shelter-avatar.png';

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
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'Company (disabled)',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Company',
                          defaultValue: 'West Newbury Animal Shelter',
                          disabled: true,
                        },

                        {
                          label: 'Email address',
                          type: 'email',
                          bsClass: 'form-control',
                          placeholder: 'WN.AnimalShelter@gmail.com',
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
                          placeholder: 'Password',
                          defaultValue: '**********',
                        },
                        {
                          label: 'Confirm Password',
                          type: 'Password',
                          bsClass: 'form-control',
                          placeholder: 'Password',
                          defaultValue: '**********',
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
                          placeholder: 'Home Address',
                          defaultValue: 'West Newbury Shelter 123',
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
                          placeholder: 'City',
                          defaultValue: 'Boston',
                        },
                        {
                          label: 'Country',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Country',
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
                          <ControlLabel>About Us</ControlLabel>
                          <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="We provide sheltering, care and enrichment to unwantedneglected, and abused animals." />
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
                bgImage="https://i.imgur.com/p3dqM5A.png"
                avatar={avatar}
                name="West Newbury Animal Shelter"
                userName="WN.Shelter"
                description={
                  <span>
                    "We provide sheltering,
                                        <br />
                    care and enrichment to unwanted,
                                        <br />
                    neglected, and abused animals"
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
