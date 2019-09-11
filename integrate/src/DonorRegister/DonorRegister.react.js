import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './DonorRegister.css';
let url="http://localhost:3002/donorList";
class DonorRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
        "donor_id":0,
        "donor_name":"",
        "dob":"",
        "blood_group":"",
        "phone_number":0,
        
        "address":
        {
        "city":"",
        "state":"",
        "country":"",
        "pincode":0,
        "line":""
        },
        
        "donor_availablity":true,
        "email":"",
        "effective_date":""
    }
        }
    }


    handleChange =(event) =>{
       
        let name =event.target.name;
                  let value =event.target.value;
                  console.log(value);
          this.setState(prevState =>( {newdonorList:{...prevState.newdonorList,[name]:value}}));
      }

      handleSubmit =(event) =>
      {
          event.preventDefault();
          console.log(this.state.newdonorList);
          console.log("hi");
          fetch(url,{"method":"POST",
          "body":JSON.stringify(this.state.newDonorList),
           "headers":{
               "Content-Type":"application/json"
           }
}).then(resp=>{ console.log("Response");console.log(resp.status)});
      }
    render() {
        
        return (
               
                <div className =" donor-reg fixed-center">  
                <br></br>
                <br></br>
                <br></br>
            <form onSubmit={this.handleSubmit}>  
              
                    <label htmlFor="">Donor Id</label>
                    <input type="number" name='donor_id' id="donor_id" ref="donor_id" onChange={this.handleChange} required /><br/>
               
                    <label htmlFor="">Donor Name</label>
                    <input type="text" name="donor_name" id="donor_name" ref="donor_name"  onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">DOB</label>
                    <input type="date" name="dob" ref="dob" id="dob"onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Blood Group</label>
                   
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
                    <label htmlFor="">Phone Number</label>
                    <input type="number" name='phone_number' id="phone_number" ref="phoneNumber" onChange={this.handleChange} required/><br/>
                    <label htmlFor="" name="address" id="address" ref="address">Address</label><br/>
                    <label htmlFor="">Line</label>
                    <input type="text" name='line' id="line" ref="line" onChange={this.handleChange} required /><br/>
                    <label htmlFor="">State</label>
                    <input type="text" name='state' id="state" ref="state" onChange={this.handleChange} required/><br/>
                    <label htmlFor="">City</label>
                    <input type="text" name='city' id="city" ref="city" onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Country</label>
                    <input type="text" name='country' id="country" ref="country" onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Pin Code</label>
                    <input type="number" name='pincode' id="pincode" ref="pincode" onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Donor Status</label><br></br>
                    {/* <input id="donor_status" name="donor_availablity" checked type="radio" onChange={this.handleChange} required/><br/> */}
                    {/* <label htmlFor="">Donor Status</label>  Available &nbsp; */}
                    <input id="donor_status" name="donor_availablity"  type="radio" defaultChecked/>Available<br/>
                    <input id="donor_status_1" name="donor_availablity"  type="radio"/> Not Available<br/><br/>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id="email" ref="email" onChange={this.handleChange} required /><br/>
                    <label htmlFor="">Eff Date</label>
                    <input type="date" name="effdate" ref="effdate" id="effdate"onChange={this.handleChange} required/><br/>
                   
                    <input type="submit" value="POST"/>
            </form>
            </div>
        
        );
    }
}

export default DonorRegister;
