import React from 'react';
import DisplayCamp from '../DisplayCamp/DisplayCamp.react';
import CheckAvailability from '../CheckAvailability/CheckAvailability.react'

export default class Home extends React.Component {

    constructor() {
        super()
        this.state = { 
            "login":false,
            

         
        }
    }
    render(){
        return(
            <div className="container">
                 <br/>
                 <br/>
                 <br/>
                <h1>Search Blood Donors</h1>
                <CheckAvailability/>
                <br></br>
                <h1>Blood Donation Camps</h1>
                <DisplayCamp/>
               
                 
                 
                
                
            </div>
        )
    }
}