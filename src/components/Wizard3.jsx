import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    mortgage = (mortgage) => {
        this.setState({
            mortgage: mortgage
        })
    }

    rent = (rent) => {
        this.setState({
            rent: rent
        })
    }

    submit = () => {
        axios.post('/api/houses', this.state)
        .then(this.props.history.push('/'))
    }
    
    render() {
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
                <input type="number" placeholder='Mortgage'
                    onChange={e => this.mortgage(e.target.value)} />
                <input type="number" placeholder='Rent'
                    onChange={e => this.rent(e.target.value)} />
            </div>
            <Link to='/wizard/2'>
                <button className='wizNav'>Previous Step</button>
            </Link>
            <Link to='/'>
                <button 
                onClick={()=>this.submit()}
                className='complete'>Complete</button>
            </Link>
        </div>
        );
    }
}

export default Wizard3;