import React from 'react';
import './App.css';
import axios from 'axios';
import {WebMap} from '@esri/react-arcgis';

export default class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            webserver_ip: 'http://localhost:5000',
            item_id: ""
        }
    }

    componentDidMount() {
        this.getMap()
    }

    getMap = async() => {
        await axios.get(this.state.webserver_ip + '/map')
        .then(response => {
            console.log(response.data)
            this.setState({item_id: response.data})
        })
        .catch(err => console.log('Error: ' + err))
    }

    // TODO: Get lighthouse data from backend
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Title">
                        <p>
                        CSC 462 Distributed Systems
                        </p>
                        <p>
                        Meghan Fair
                        </p>
                    </div>
                    <select>
                        <option href="#/action-1">Amphitrite Point</option>
                        <option href="#/action-2">Bonilla Island</option>
                        <option href="#/action-3">Chrome Island</option>
                        <option href="#/action-3">Departure Bay</option>
                        <option href="#/action-3">Egg Island</option>
                        <option href="#/action-3">Entrance Island</option>
                        <option href="#/action-3">Kains Island</option>
                        <option href="#/action-3">Langara Island</option>
                        <option href="#/action-3">McInnes Island</option>
                        <option href="#/action-3">Nootka Point</option>
                        <option href="#/action-3">Pine Island</option>
                        <option href="#/action-3">Race Rocks</option>
                    </select>

                    <div className='Blank-space'></div>

                    <button onClick={this.getMap}>Get Map</button>
                    
            {/* // TODO: Render lighthouse feature layer */}
                    <div style={{ width: '75vw', height: '75vh' }}>
                        <WebMap id={this.state.item_id} />    
                    </div>

                </header>
            </div>
        )
    }

}


  