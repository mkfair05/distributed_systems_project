import React from 'react';
import './App.css';
import axios from 'axios';
import {WebMap} from '@esri/react-arcgis';

export default class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            item_id:""
        }
        
    }
    
    componentDidMount() {
        // axios.get('http://localhost:5000/hello')
        // .then(response => {
        //     console.log(response.data)
        //     this.setState({str: response.data})
        // })
            
        // .catch(err => console.log('Error: ' + err))
        axios.get('http://localhost:5000/layer')
        .then(response => {
            console.log(response.data)
            this.setState({item_id: response.data})
        })
        .catch(err => console.log('Error: ' + err))
    }

    getData = () => {
        axios.get('http://localhost:5000/layer')
        .then(response => {
            console.log(response.data)
            this.setState({item_id: response.data})
        })
        .catch(err => console.log('Error: ' + err))
    }

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
                        <button className="button" onClick={this.getData}>{this.state.str}</button>
                    </div>
                    <div style={{ width: '100vw', height: '100vh' }}>
                        <WebMap id={this.state.item_id} />
                    </div>
                </header>
            </div>
        )
    }

}


  