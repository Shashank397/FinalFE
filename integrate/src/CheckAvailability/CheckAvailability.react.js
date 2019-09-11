

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
//import './SearchDonorByLocation.css';
import ShowDonor from '../ShowDonor/ShowDonor.react';
let bloodId,location;
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
        console.log(bloodId);
        console.log(location);
        
        let url="http://localhost:3030/donorList";

        fetch(url).then(resp=>resp.json()).then(donorList=>{this.setState({donorList:donorList,loaded:true})});
      
        
    }
    handleChange1 = event => {
       
        bloodId=event.target.value;
    }

    handleChange = event => {
       
        location=event.target.value;
    }
    render()
    
     {
        console.log(this.state.loaded+"Hi");
        if(!this.state.loaded)
    {
        return (

            
            <form onSubmit={this.handleClick}>
    <br/>
    <br/>
    <div class="row container">        
            <div class="form-group"className="col-md-3">
            <label for="Blood Group">Select Blood Group</label>
            <select class="form-control" id="id"  onChange={this.handleChange1}>
            <option>O+ve</option>
            <option>O-ve</option>
            <option>A+ve</option>
            <option>A-ve</option>
            <option>B+ve</option>
            <option>B-ve</option>
            <option>AB+ve</option>
            <option>AB-ve</option>
            <option>B+ve</option>
            </select>
            </div>
            
              <div class="form-group" className="col-md-3">
    <label for="Location" >Location</label>
    <select class="form-control" id="location" onChange={this.handleChange}  >
      <option>Chennai</option>
      <option>Mumbai</option>
      <option>Bangalore</option>
      <option>Kolkata</option>
      <option>Delhi</option>
      <option>Pune</option>
      <option>Chandigarh</option>
      <option>Lucknow</option>
      <option>Jaipur</option>
      <option>Hyderabad</option>
    </select>
</div>
            <div class="form-group">
            <label for="Blood Group">  </label>
            <div></div>
            <button class=".btn-lg" type="button" class="btn btn-secondary">Submit</button>
            </div>
            </div>

            </form>
           
          
            
            
        );
    }
    else{
        return(

            <div>
                
        <ShowDonor donorList = {this.state.donorList}></ShowDonor>
        </div>
        );

    }
    }
}

export default CheckAvailability;