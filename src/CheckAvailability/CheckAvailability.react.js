

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
//import './SearchDonorByLocation.css';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import axios from 'axios';
let bloodId="O+",location="CH";
class CheckAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            donorList:[]
        }
    }
    handleClick=(event)=>{
        event.preventDefault();
        // console.log(bloodId);
        // console.log(location);
        console.log("HI!!!!!!!!");
        
        let url="http://localhost:8080/search/" + bloodId+"/"+location;
        console.log(url);

        axios.get(url,{
            // params: {
            //         blood_group: bloodId,
            //         location:location
            //       }
        })
        // fetch(url,
        //     // {"method":"GET",
        // //    "headers":{
        // //        "Content-Type":"application/json",
        // //        "Access-Control-Allow-Origin":"*",
        // //     //    "Access-Control-Request-Method": "GET",
        // //     //    "Access-Control-Request-Headers":"Content-Type", "Authorization"
        // //    },
        // //    "params": {
        // //     "blood_group": "B+"
        // //   }
        // )
        // .then(resp=>{resp.json();console.log(resp)}).
        .then(donorList=>{this.setState({donorList:donorList.data,loaded:true})}).
        then(console.log(this.state.donorList));
        
    }
    handleChange1 = event => {
       
        bloodId=event.target.value;
        console.log(bloodId);
    }

    handleChange = event => {
       
        location=event.target.value;
        console.log(location);

    }
    render()
    
     {
        console.log(this.state.loaded+"Hi");
        if(!this.state.loaded)
        {
            return(     
                <form onSubmit={this.handleClick}>
                    <br/>
                    <br/>
                    <div className="row container">        
                        <div className="form-group"className="col-md-3">
                            <label htmlFor="Blood Group">Select Blood Group</label>
                            <select className="form-control" id="id" name = "blood_group" onChange={this.handleChange1}>
                            <option>O+</option>
                            <option>O-</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            </select>
                        </div>
                        
                         <div className="form-group" className="col-md-3">
                            <label htmlFor="Location" >Location</label>
                                <select className="form-control" id="location" onChange={this.handleChange}  >
                                    <option>CH</option>
                                    <option>Mumbai</option>
                                    <option>BLR</option>
                                    <option>Kolkata</option>
                                    <option>Delhi</option>
                                    <option>Pune</option>
                                    <option>Chandigarh</option>
                                    <option>Lucknow</option>
                                    <option>Chennai</option>
                                    <option>Hyderabad</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Blood Group">  </label>
                            <div></div>
                            <button className=".btn-lg" type="submit" value="POST" className="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </form>
        );
    }
    else{
        console.log(this.state.donorList)
        return(

        <div>
            <ShowDonor donorList = {this.state.donorList}></ShowDonor>
        </div>
        );

    }
    }
}

export default CheckAvailability;