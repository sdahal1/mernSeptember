import React, { Component } from 'react';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numMeals: this.props.numMealsServed
        };
    }

    render(){

        //if I want a component to have it own variable that is unique to that particular instance of the component and it is subject to change, then we will want to use a state variable

        const doSomething = ()=>{
            console.log(`you clicked on ${this.props.nameOfDish}!`);
            console.log("STATE OF NUMMEALS BEFORE MODIFYING-->", this.state.numMeals)
            // this.state.numMeals +=1;
            // this.setState({ position: "Off" })
            this.setState({numMeals: this.state.numMeals+1})

            console.log("STATE OF NUMMEALS AFTER MODIFYING-->", this.state.numMeals)



            // console.log("ohh you hungry riiiiiight");
            // alert(`Ding Dong, thats you door bell, we got your ${this.props.nameOfDish} delivered!`)
        }




        return (
        <>
            <div className="menuItem">
                <h3>Dish Name: {this.props.nameOfDish}</h3>
                <h5>Price: {this.props.price}</h5>
                <div>Description: {this.props.children}</div>
                <p>Number of this particular meal served so far: {this.state.numMeals} </p>
                <p><button onClick = {doSomething}>Serve Meal!</button></p>
            </div>

            
         
        </>
        )
    }
}

export default Menu;