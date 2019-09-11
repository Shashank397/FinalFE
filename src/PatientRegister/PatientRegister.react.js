import React from 'react';

import './PatientRegister.css';
let url="http://localhost:8080/addPatient";
class PatientRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newpatientList:{
                "patient_name": "",
                "dob": "",
                "blood_group": "O+",
                "phone_number": 0,
                "email": "",
                "line": "",
                "city": "",
                "state": "",
                "country": "",
                "pincode":0
            }
        }
    }
    
    handleChange = event =>{
       
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log("Hi");
        
        let name = event.target.name;
        let value = event.target.value;
        this.setState(prevState =>( {newpatientList:{...prevState.newpatientList,[name]:value}}));
      }

      handleSubmit =(event) =>
      {
          event.preventDefault();
          console.log(this.state.newpatientList);
          fetch(url,{"method":"POST",
          "body":JSON.stringify(this.state.newpatientList),
           "headers":{
               "Content-Type":"application/json"
           }
}).then(resp=>{ console.log(resp);console.log(resp.status)});
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
                    <label htmlFor="">Patient Name</label>
                    <input type="text" name="patient_name" pattern="[A-Za-z\s]*" title="Only characters are allowed"  onChange={this.handleChange} required/><br/>
                   
                   <label htmlFor="">DOB</label>
                    <input type="date" name="dob"onChange={this.handleChange} required/><br/>
                   
                    <label htmlFor=""> Blood Group</label>
                    <select name="blood_group" onChange={this.handleChange}>
                    <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                    </select><br/>

                    <label htmlFor="">Phone Number</label>
                    <input type="number" name='phone_number'  onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Line</label>
                    <input type="text" name='line'  onChange={this.handleChange} required /><br/>
                    
                    <label htmlFor="">State</label>
                    <input type="text" name='state' pattern="[A-Za-z\s]*" title="Only characters are allowed" onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">City</label>
                    <input type="text" name='city' pattern="[A-Za-z\s]*" title="Only characters are allowed"  onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Country</label>
                    <input type="text" name='country' pattern="[A-Za-z\s]*" title="Only characters are allowed"  onChange={this.handleChange} required/><br/>
                    
                    <label htmlFor="">Pin Code</label>
                    <input type="number" name='pincode'  onChange={this.handleChange} required/><br/>
                 
                    <label htmlFor="">Email</label>
                    <input type="email" name='email'  onChange={this.handleChange} required /><br/>
                    
                    {/* <label htmlFor="">Eff Date</label>
                    <input type="date" name="effective_date" onChange={this.handleChange} required/><br/> */}
                   
                    <input type="submit" value="POST"/>
            </form>
            </div>
        );
    }
}

export default PatientRegister;


