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
            mapIsLoaded: "",
            lighthouse_data: []
        }
        this.getMap = this.getMap.bind(this)
        this.getData = this.getData.bind(this)
        this.getLighthouse = this.getLighthouse.bind(this)

    }

    componentDidMount() {
        this.getMap()
        .then((result) => {
            this.setState({
                mapIsLoaded: true,
            })

        })
        this.getData()
        this.getLighthouse()
    }

    getMap = async() => {
        await axios.get(this.state.webserver_ip + '/api/map')
        .then(response => {
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

    getLighthouse = async() => {
        axios.get(this.state.webserver_ip + '/api/lighthouse')
        .then(response => {
            console.log(response.data)
            this.setState({lighthouse_data: response.data})
        })
        .catch(err => console.log('Error: ' + err))
    }

    getTitle = () => {
        var title = this.state.lighthouse_data[0]
        // return title.map((key, index)=>{
            // return <th key={key}>{key}</th>
        // })
    }

    getKeys = () => {
        return this.state.lighthouse_data[1]
    }

    renderLighthouseData = () => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this.getTitle()}</tr>
                    </thead>

                </table>
                {this.getKeys()}
            </div>
        )
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

                   <this.renderLighthouseData/>

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


  