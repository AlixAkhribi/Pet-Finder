import React, { Component } from 'react';
// jQuery plugin - used for DataTables.net
import $ from 'jquery';
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import AddPetBtn from '../../views/Components/AddPetBtn';
import Card from 'components/Card/Card.jsx';

// DataTables.net plugin - creates a tables with actions on it
require('datatables.net-responsive');
$.DataTable = require('datatables.net-bs');


// dummy data for now to see if tables displys properly //

const dataTable = {
  headerRow: ['Name', 'Type', 'Breed', 'Age', 'Appointment', 'Actions'],
  footerRow: ['Name', 'Type', 'Breed', 'Age', 'Appointment', 'Actions'],
  dataRows: [
    ['Spike', 'Dog', 'French Bulldog', '3', 'Yes'],
    ['Whiskers', 'Cat', 'British Shorthair', '2', 'No'],
    ['Kalipso', 'Bird', 'Cockatoo', '8', 'Yes'],
    ['Fiasko', 'Dog', 'Boxer', '6', 'No'],
  ],
};

class DataTables extends Component {
  componentDidMount() {
    // $(this.refs.main).DataTable({
    //     dom: '<"data-table-wrapper"t>',
    //     data: this.props.names,
    //     columns,
    //     ordering: false
    // });
    $('#datatables').DataTable({
      pagingType: 'full_numbers',
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']],
      responsive: true,
      language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search records',
      },
    });
    const table = $('#datatables').DataTable();

    // Edit record
    table.on('click', '.edit', function () {
      const $tr = $(this).closest('tr');

      const data = table.row($tr).data();
      alert(`You press on Row: ${data[0]} ${data[1]} ${data[2]}'s row.`);
    });

    // Delete a record
    table.on('click', '.remove', function (e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    // Like record
    table.on('click', '.like', () => {
      alert('You clicked on Like button');
    });
  }
  componentWillUnmount() {
    $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h4 className="title">Animal Data</h4>
              <Card
                title={<div className="data-tables-header">Animals <span className="data-tables-button"><AddPetBtn /></span></div>}
                content={
                  <div className="fresh-datatables">
                    <table id="datatables" ref="main" className="table table-striped table-no-bordered table-hover" cellSpacing="0" width="100%" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th>{dataTable.headerRow[0]}</th>
                          <th>{dataTable.headerRow[1]}</th>
                          <th>{dataTable.headerRow[2]}</th>
                          <th>{dataTable.headerRow[3]}</th>
                          <th>{dataTable.headerRow[4]}</th>
                          <th className="disabled-sorting text-right">{dataTable.headerRow[5]}</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>{dataTable.footerRow[0]}</th>
                          <th>{dataTable.footerRow[1]}</th>
                          <th>{dataTable.footerRow[2]}</th>
                          <th>{dataTable.footerRow[3]}</th>
                          <th>{dataTable.footerRow[4]}</th>
                          <th className="text-right">{dataTable.footerRow[5]}</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {
                          dataTable.dataRows.map((prop, key) => (
                            <tr key={key}>{
                              prop.map((prop, key) => (
                                <td key={key}>{prop}</td>
                                              ))
                                      }
                              <td className="text-right">
                                <a className="btn btn-simple btn-info btn-icon like"><i className="fa fa-heart" /></a>
                                <a className="btn btn-simple btn-warning btn-icon edit"><i className="fa fa-edit" /></a>
                                <a className="btn btn-simple btn-danger btn-icon remove"><i className="fa fa-times" /></a>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
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

export default DataTables;
