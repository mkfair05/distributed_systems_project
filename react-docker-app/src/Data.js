import React from 'react';
import './App.css';
import CSV from './test_data.csv';
import * as d3 from 'd3';

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      row_data: [
        {
          date: '1995',
          temp: '12',
          salinity:'hello'

        }
      ]

    }
  }

  componentDidMount() {
    d3.csv(CSV).then(function(CSV){
      console.log(CS
    }).catch(function (err) {
      throw err
    })
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
    return this.state.row_data.map((rowdata, index) => {
      const {date, temp, salinity} = rowdata
      return (
        <tr>
          <td>{date}</td>
          <td>{temp}</td>
          <td>{salinity}</td>
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
      </div>

    )
  }
}
export default Data