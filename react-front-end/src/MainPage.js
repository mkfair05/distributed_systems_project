import React from 'react';
import './App.css';
import axios from 'axios';
import {WebMap} from '@esri/react-arcgis';

export default class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            webserver_ip: 'http://localhost:5000',
            item_id: "",
            mapIsLoaded: ""
        }
        this.getMap = this.getMap.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getMap()
        .then((result) => {
            console.log(result)
            this.setState({
                mapIsLoaded: true,
            })

        })
        this.getData()
    }

    getMap = async() => {
        await axios.get(this.state.webserver_ip + '/api/map')
        .then(response => {
            console.log(response.data)
            this.setState({item_id: response.data})
        })
        .catch(err => console.log('Error: ' + err))

    }

    getData = async() => {
        axios.get(this.state.webserver_ip + '/api/data')
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log('Error: ' + err))
    }

    // TODO: Get lighthouse data from backend
    render() {
        const isLoaded = this.state.mapIsLoaded
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
                    <select onChange={this.getData.bind(this)} value='select'>
                        <option value='select'>Select</option>
                        <option value='AP'>Amphitrite Point</option>
                        <option value='BI'>Bonilla Island</option>
                        <option value='CI'>Chrome Island</option>
                        <option value='DB'>Departure Bay</option>
                        <option value='EggI'>Egg Island</option>
                        <option value='EI'>Entrance Island</option>
                        <option value='KI'>Kains Island</option>
                        <option value='LI'>Langara Island</option>
                        <option value='MI'>McInnes Island</option>
                        <option value='NP'>Nootka Point</option>
                        <option value='PI'>Pine Island</option>
                        <option value='RR'>Race Rocks</option>
                    </select>


                    <div className='Blank-space'></div>
                    
                    <div className='Web-map'>
                        {isLoaded ? (
                            <WebMap id={this.state.item_id} />    
                        ):(
                            <WebMap id='a82c9906c6fc4e44b8eb039583ca40fb'/>
                        )}
                    </div>

                </header>
            </div>
        )
    }

}


  