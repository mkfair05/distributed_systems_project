import React from 'react';
import '../App.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



class Lighthouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: ''
    }
  }

  render() {
    return (
      <div className="Dropdown">
        <DropdownButton id="dropdown-basic-button" title="Active Data Collection Sites">
          <Dropdown.Item href="#/action-1">Amphitrite Point</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Bonilla Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Chrome Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Departure Bay</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Egg Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Entrance Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Kains Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Langara Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">McInnes Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Nootka Point</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pine Island</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Race Rocks</Dropdown.Item>

        </DropdownButton>
      </div>

    )
  }
}
export default Lighthouse