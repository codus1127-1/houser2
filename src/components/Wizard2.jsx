import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { updateImg } from './../ducks/reducer';

class Wizard2 extends Component {
    constructor(props) {
        super(props);
        this.state= {
            img: ''
        }
        this.img = this.img.bind(this)
    }

    componentDidMount() {
        this.setState({ img: this.props.img})
    }


    img(img) {
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
                    value={this.state.img}
                />
            </div>
            <Link to='/wizard/1'>
                <button 
                onClick={() => this.props.updateImg(this.state.img)}
                className='wizNav'>Previous Step</button>
            </Link>
            <Link to='/wizard/3'>
                <button
                onClick={() => this.props.updateImg(this.state.img)}
                className='wizNav'>Next Step</button>
            </Link>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      img: state.img
    }
  }
  
  export default connect(mapStateToProps, { updateImg })(Wizard2);
  