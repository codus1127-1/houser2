import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {updateLocation, clear} from '../ducks/reducer'

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
    componentDidMount() {
        let {name, address, city, state, zip} = this.props
        this.setState({name, address, city, state, zip})
    }  
    
    handleChange(prop, value) {
        switch (prop) {
          case 'state':
            if (value.length > 2) {
              return
            }
            break;
          case 'zip':
            if (value.length > 5) {
              return
            }
            break;
          default:
            break;
        }
        this.setState({ [prop]: value })
      }

    // Name = (name) => {
    //     this.setState({
    //         name: name
    //     })
    // }

    // Address = (address) => {
    //     this.setState({
    //         address: address
    //     })
    // }
    // City = (city) => {
    //     this.setState({
    //         city: city
    //     })
    // }

    // HouseState = (state) => {
    //     this.setState({
    //         state: state
    //     })
    // }

    // Zip = (zip) => {
    //     this.setState({
    //         zip: zip
    //     })
    // }

    // submit = () => {
    //     axios.post('/api/houses', this.state)
    //     .then(this.props.history.push('/'))
    // }


    render() {
        // console.log(this.props)
        return (
            <div className='wizard1'>
                <div className="titleCont">
                    <h1 className='title1'>
                        Add New Listing
                    </h1>
                    <Link to='/'>
                        <button 
                        className ='cancel'
                        onClick={()=> this.props.clear()}>Cancel</button>
                    </Link>
                </div>
                {/* <div className='line'/> */}
                <div className="wizardInput">
                    <input type="text" placeholder='Name'
                        onChange={e => this.handleChange('name', e.target.value)}
                        value={this.state.name}
                    />
                    <input type="text" placeholder='Address'
                        onChange={e => this.handleChange('address', e.target.value)}
                        value={this.state.address}
                    />
                    <input type="text" placeholder='City'
                        onChange={e => this.handleChange('city', e.target.value)}
                        value={this.state.city}
                    />
                    <input type="text" placeholder='State'
                        onChange={e => this.handleChange('state', e.target.value)}
                        value={this.state.state}
                    />
                    <input type="number" placeholder='Zip Code'
                        onChange={e => this.handleChange('zip', e.target.value)}
                        value={this.state.zip}
                    />
                </div>
                <Link to='/wizard/2'>
                    <button 
                    onClick={() => this.props.updateLocation(this.state)}
                    className='wizNav'>Next Step</button>
                </Link>
                {/* <button 
                onClick={()=>this.submit()}
                className='complete'>Complete</button> */}
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    let { name, address, city, state, zip } = reduxState;
    return { name, address, city, state, zip }
  }
  
  export default connect(mapStateToProps, { updateLocation, clear })(Wizard1);