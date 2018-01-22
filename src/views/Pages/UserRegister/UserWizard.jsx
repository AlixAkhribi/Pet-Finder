import React, { Component } from 'react';
// react component that creates a form divided into multiple steps
import StepZilla from 'react-stepzilla';
import{
    Grid, Row, Col
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import UserStep1 from '../ShelterRegister/ShelterStep1.jsx';
import UserStep2 from '../ShelterRegister/ShelterStep2.jsx';
import UserStep3 from '../ShelterRegister/ShelterStep3.jsx';

const steps = [
    { name: 'First Tab', component: <UserStep1 />},
    { name: 'Second Tab', component: <UserStep2 />},
    { name: 'Third Tab', component: <UserStep3 />}
];

class UserWizard extends Component{
    render(){
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <Card
                                wizard
                                id="wizardCard"
                                textCenter
                                title="Registration"
                                category="User"
                                content={
                                    <StepZilla
                                        steps={steps}
                                        stepsNavigation={false}
                                        nextButtonCls="btn btn-prev btn-info btn-fill pull-right btn-wd"
                                        backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd"
                                    />
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UserWizard;
