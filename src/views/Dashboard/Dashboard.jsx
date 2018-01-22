
// export default Dashboard;
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
// react component used to create charts
import ChartistGraph from 'react-chartist';
// function that returns a color based on an interval of numbers
import { scaleLinear } from 'd3-scale';
// react components used to create a SVG / Vector map


import Card from 'components/Card/Card.jsx';

import {
  dataBar,
  optionsBar,
  responsiveBar,
  table_data,
} from 'variables/Variables.jsx';

class Dashboard extends Component {
  createTableData() {
    const tableRows = [];
    for (let i = 0; i < table_data.length; i++) {
      tableRows.push(<tr key={i}>
        <td>
          <div className="flag">
            <img src={table_data[i].flag} alt="us_flag" />
          </div>
        </td>
        <td>{table_data[i].country}</td>
        <td className="text-right">{table_data[i].count}</td>
        <td className="text-right">{table_data[i].percentage}</td>
      </tr>);
    }
    return tableRows;
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Pets Adopted in 2018"
                category="Dogs"
                content={
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                                }
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> Snoop
                                        <i className="fa fa-circle text-danger" /> Doggy
                  </div>
                                }
                stats={
                  <div>
                    <i className="fa fa-check" /> Doooooooooog!
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

export default Dashboard;
