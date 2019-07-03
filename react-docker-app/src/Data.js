import React from 'react';
import './App.css';
import CSV from './test_data.csv';
import Button from 'react-bootstrap/Button'
import {CsvToHtmlTable} from 'react-csv-to-table';

const tabledata = '1934-08-23,30.6,13.7,48.9222,-125.5408'
class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      new_row: [
        {
          date: '',
          temp: '',
          salinity:'',
          latitude:'',
          longitude:''
        }
      ],
      csvdata:''
    }
  }




  renderTableHeader() {
    return (
      <tr>
        <td>Date</td>
        <td>Temperature</td>
        <td>Salinity</td>
        <td>Latitude</td>
        <td>Longitude</td>
      </tr>
    )
  }

  renderTableData() {
    return this.state.new_row.map((rowdata, index) => {
      const {date, temp, salinity, latitude, longitude} = rowdata
      console.log(CSV)
      return (
        <tr>
          <td>{date}</td>
          <td>{temp}</td>
          <td>{salinity}</td>
          <td>{latitude}</td>
          <td>{longitude}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="Data-table">
          <p>CSV</p>
        <table id='row-data'>
          <thead>
            {this.renderTableHeader()}
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
        <CsvToHtmlTable
          data={tabledata}
          csvDelimiter=','
        />
      </div>

    )
  }
}
export default Data