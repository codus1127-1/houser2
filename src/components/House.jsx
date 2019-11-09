import React, { Component } from 'react';

class House extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const house = this.props.element
        return (
            <div className='oneHouse'>
                <div className="imgCont">
                    <img src={house.img} alt="img"/>
                </div>
                <div className='propertyInfo'>
                    <p>Property Name: {house.name} </p>
                    <p>Address: {house.address} </p>
                    <p>City: {house.city} </p>
                    <p>State: {house.state} </p>
                    <p>Zip: {house.zip} </p>
                </div>
                <div className="mortgageInfo">
                    <p>Monthly Mortgage: ${house.mortgage} </p>
                    <p>Desired Rent: ${house.rent} </p>
                </div>
                <button className='delete' onClick={()=>this.props.remove(house.id)}>X</button>

                
            </div>
        );
    }
}

export default House;