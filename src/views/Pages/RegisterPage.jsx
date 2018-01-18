import React, { Component } from 'react';
import {
  Grid, Row, Col,
  Media,
  FormControl, FormGroup,
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

class RegisterPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="header-text">
              <h2>Light Bootstrap Dashboard PRO</h2>
              <h4>Register for free</h4>
              <hr />
            </div>
          </Col>
          <Col md={4} mdOffset={2}>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-user" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                                    Free Account
                </Media.Heading>

              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-graph1" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                                    Awesome Performances
                </Media.Heading>
                                Description of dashboard
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-headphones" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading />

              </Media.Body>
            </Media>
          </Col>
          <Col md={4}>
            <form>
              <Card
                plain
                content={
                  <div>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Your First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Your Last Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Company"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="email"
                        placeholder="Enter Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="password"
                        placeholder="Password Confirmation"
                      />
                    </FormGroup>
                  </div>
                                }
                ftTextCenter
                legend={
                  <Button wd fill neutral>
                                        Create Free Account
                  </Button>
                                }
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RegisterPage;
