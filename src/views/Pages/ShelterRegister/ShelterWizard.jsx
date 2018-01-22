import React, { Component } from 'react';
// react component that creates a form divided into multiple steps
import StepZilla from 'react-stepzilla';
import{
    Grid, Row, Col
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import ShelterStep1 from './ShelterStep1.jsx';
import ShelterStep2 from './ShelterStep2.jsx';
import ShelterStep3 from './ShelterStep3.jsx';

const steps = [
    { name: 'First Tab', component: <ShelterStep1 />},
    { name: 'Second Tab', component: <ShelterStep2 />},
    { name: 'Third Tab', component: <ShelterStep3 />}
];

class ShelterWizard extends Component{
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
                                category="Shelter"
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

export default ShelterWizard;
