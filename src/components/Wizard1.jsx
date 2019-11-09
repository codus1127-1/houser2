import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class Wizard1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
    }

    // componentDidUpdate= (prevProps) => {
    //     if (this.props.match.path === prevProps.match.path)
    //     this.setState({
    //         name: prevProps.name,
    //         address: prevProps.address
    //     })
    // }

    

    Name = (name) => {
        this.setState({
            name: name
        })
    }

    Address = (address) => {
        this.setState({
            address: address
        })
    }
    City = (city) => {
        this.setState({
            city: city
        })
    }

    HouseState = (state) => {
        this.setState({
            state: state
        })
    }

    Zip = (zip) => {
        this.setState({
            zip: zip
        })
    }

    submit = () => {
        axios.post('/api/houses', this.state)
        .then(this.props.history.push('/'))
    }


    render() {
        // console.log(this.props)
        return (
            <div className='wizard1'>
                <div className="titleCont">
                    <h1 className='title1'>
                        Add New Listing
                    </h1>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </div>
                {/* <div className='line'/> */}
                <div className="wizardInput">
                    <input type="text" placeholder='Name'
                        onChange={e => this.Name(e.target.value)}
                        value={this.state.name}
                    />
                    <input type="text" placeholder='Address'
                        onChange={e => this.Address(e.target.value)}
                        value={this.state.address}
                    />
                    <input type="text" placeholder='City'
                        onChange={e => this.City(e.target.value)}
                        value={this.state.city}
                    />
                    <input type="text" placeholder='State'
                        onChange={e => this.HouseState(e.target.value)}
                        value={this.state.state}
                    />
                    <input type="number" placeholder='Zip Code'
                        onChange={e => this.Zip(e.target.value)}
                        value={this.state.zip}
                    />
                </div>
                {/* <Link to='/wizard/2'>
                    <button className='next'>Next Step</button>
                </Link> */}
                <button 
                onClick={()=>this.submit()}
                className='complete'>Complete</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps)(Wizard1);