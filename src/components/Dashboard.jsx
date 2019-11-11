import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import House from './House'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    

    componentDidMount = () => {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        .then(result => {
            this.setState({
                houses: result.data
            })
        })
    }
    
    render() {
        var allHouses = this.state.houses.map(element => (
            <div key={element.id}>
                <House element={element} remove={this.deleteHouse} />
            </div>
        ))

        return (
            <div className="body2">
                {/* <div className='wizard1'> */}
                    <div className="titleCont">
                        <h1 className='title1'>
                            Dashboard 
                        </h1>
                        <Link to='/wizard/1'>
                            <button className='addProperty' >Add New Property</button>
                        </Link>
                    </div>
                    <div className='line'/>
                    <h3>Home Listings</h3>
                    {allHouses}
                {/* </div> */}
            </div>
        );
    }
}

export default Dashboard;