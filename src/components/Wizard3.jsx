import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateMoney, clear } from '../ducks/reducer';


class Wizard3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            recommended: 0,
            rent: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.complete = this.complete.bind(this);
    }
  

  componentDidMount() {
    let { mortgage, rent } = this.props
    this.setState({ mortgage, rent })
  }

  handleChange(prop, value) {
    switch (prop) {
      case 'mortgage':
        this.setState({
          mortgage: value, recommended: value * 1.25
        })
        break;
      case 'rent':
        this.setState({
          rent: value
        })
        break;
      default:
        break;
    }
  }

  complete() {
    let { name, address, city, state, zip, img } = this.props;
    let house = {
      name, address, city, state, zip, img, ...this.state
    }
    axios.post('/api/houses', house)
      .then(res => {
        this.props.clear();
        this.props.history.push('/')
      })
  }

    // mortgage = (mortgage) => {
    //     this.setState({
    //         mortgage: mortgage
    //     })
    // }

    // rent = (rent) => {
    //     this.setState({
    //         rent: rent
    //     })
    // }

    // submit = () => {
    //     axios.post('/api/houses', this.state)
    //     .then(this.props.history.push('/'))
    // }
    
    render() {
        return (
            <div className='wizard1'>
            <div className="titleCont">
                <h1 className='title1'>
                    Add New Listing
                </h1>
                <Link to='/'>
                    <button
                    className ='cancel'>Cancel</button>
                </Link>
            </div>
            {/* <div className='line'/> */}
            <div className="wizardInput">
                <input type="number" placeholder='Mortgage'
                    onChange={e => this.handleChange('mortgage', e.target.value)} />
                <input type="number" placeholder='Rent'
                    onChange={e => this.handleChange('rent', e.target.value)} />
            </div>
            <Link to='/wizard/2'>
                <button 
                    onClick={_ => this.props.updateMoney(this.state)}
                    className='wizNav1'>Previous Step</button>
            </Link>
            <Link to='/'>
                <button 
                onClick={this.complete}
                className='addProperty1'>Complete</button>
            </Link>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return state
  }
  
  export default connect(mapStateToProps, { updateMoney, clear })(Wizard3)