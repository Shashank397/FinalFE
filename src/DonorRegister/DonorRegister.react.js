import React from 'react';
import axios  from 'axios';

import './DonorRegister.css';
const proxyurl = "https://cors-anywhere.herokuapp.com/"
let url1="http://localhost:8080/addDonor";
let url = proxyurl + url1;
class DonorRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
        "donor_name":"",
        "dob":"",
        "bloodGroup":"O+",
        "phone_number":0,
        "city":"",
        "state":"",
        "country":"",
        "pincode":0,
        "line":"",
        "donor_availability":"",
        "email":"",
        "password": ""
    }
        }
    }


    handleChange =(event) =>{
       
        let name = event.target.name;
        let value =event.target.value;
         // console.log(value)
          this.setState(prevState =>( {newdonorList:{...prevState.newdonorList,[name]:value}}));
          //console.log("This is : " + JSON.stringify(this.state.newdonorList))
      }

      handleSubmit =(event) =>
      {
 
          event.preventDefault();
          console.log(this.state.newdonorList);
        //   axios.post(url1,this.state.newdonorList,headers)
         fetch(url1,{
            "method":"POST",
            "body":JSON.stringify(this.state.newdonorList),
            headers:{
                "Content-Type":"application/json"
            },
        })
        .then(resp=>{ console.log(resp);console.log(resp.status)});
      }
    render() {
        return (
            <div >         
            <form onSubmit={this.handleSubmit}>  
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                    {/* <label htmlFor="">Donor Id</label>
                    <input type="number" name='donor_id' id="donor_id" ref="donor_id" onChange={this.handleChange} required /><br/> */}
                    <label htmlFor="">Donor Name</label>
                    <input type="text" name="donor_name" id="donor_name" ref="donor_name"  onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">DOB</label>
                    <input type="date" name="dob" ref="dob" id="dob" pattern="[A-Za-z\s]*" title="Only characters are allowed" onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Blood Group</label>
                     <select name="bloodGroup" onChange={this.handleChange}>
                        <option value="O+">O+</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                    </select><br/> 
                    
                    <label htmlFor="">Email</label> 
                    <input type="email" name='email' id="email" ref="email" onChange={this.handleChange} required /><br/>

                    <label htmlFor="">Password</label> 
                    <input type="password" name='password' id="password" ref="password" onChange={this.handleChange} required /><br/> 
                    
                    <label htmlFor="">Phone Number</label> 
                    <input type="number" name='phone_number' id="phone_number" ref="phoneNumber" onChange={this.handleChange}  maxLength="10" required/><br/>
                    
                    <label htmlFor="">House No</label>
                    <input type="text" name='line' id="line" ref="line" onChange={this.handleChange}  required /><br/>
                    
                    <label htmlFor="">City</label>
                    <input type="text" name='city' id="city" ref="city" onChange={this.handleChange} pattern="[A-Za-z\s]*" title="Only characters are allowed" required/><br/>

                    <label htmlFor="">State</label>
                    <input type="text" name='state' id="state" ref="state" onChange={this.handleChange} pattern="[A-Za-z\s]*" title="Only characters are allowed" required/><br/>
                    
                    <label htmlFor="">Country</label>
                    <input type="text" name='country' id="country" ref="country" onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Pin Code</label>
                    <input type="number" name='pincode' id="pincode" ref="pincode" onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Donor Status</label><br></br>
                     <input id="donor_status" name="donor_availability"  type="radio"  value="Y"  onChange={this.handleChange} required/>Available<br/>
                    <input id="donor_status_1" name="donor_availability"  type="radio" value="N" onChange={this.handleChange} required/> Not Available<br/><br/>
                    
                    {/* <label htmlFor="">Eff Date</label>
                    <input type="date" name="effective_date" ref="effective_date" id="effective_date"onChange={this.handleChange} required/><br/>  */}
                    
                    <input type="submit" value="POST" onClick={this.handleSubmit}/>
            </form>
            </div>
        );
    }
}

export default DonorRegister;


