import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Wizard2 extends Component {
    constructor(props) {
        super(props);
        this.state= {
            img: ''
        }
    }

    img = (img) => {
        this.setState({
            img: img
        })
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
                <input type="text" placeholder='Image'
                    onChange={e => this.img(e.target.value)}
                />
            </div>
            <Link to='/wizard/1'>
                <button className='wizNav'>Previous Step</button>
            </Link>
            <Link to='/wizard/3'>
                <button className='wizNav'>Next Step</button>
            </Link>
        </div>
        );
    }
}

export default Wizard2;