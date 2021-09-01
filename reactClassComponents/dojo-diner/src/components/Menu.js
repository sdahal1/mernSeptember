import React, { Component } from 'react';

class Menu extends Component{

    render(){
        return (
        <>
            <div className="menuItem">
                <h3>Dish Name: {this.props.nameOfDish}</h3>
                <h5>Price: {this.props.price}</h5>
                <p>Description: {this.props.children}</p>
            </div>
         
        </>
        )
    }
}

export default Menu;