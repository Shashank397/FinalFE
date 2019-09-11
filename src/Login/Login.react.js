import React from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import CheckAvailability from '../CheckAvailability/CheckAvailability.react';
import DisplayCamp from '../DisplayCamp/DisplayCamp.react';
import AdminProfile from '../AdminProfile/AdminProfile.react';
import DonorHomePage from '../DonorHomePage/DonorHomePage/DonorHomePage.react'; 
import Axios from 'axios';
import { useCookies } from 'react-cookie';


class Login extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            username: "",

            password: "",

            loaded: false

          };

    }
    

    valusernameateForm() {

        return this.state.username.length > 0 && this.state.password.length > 0;

      }

    

      handleChange = event => {
        let name = event.target.name;
        let value =event.target.value;
         // console.log(value)
          this.setState({[name]:value});

      }

    

      handleSubmit = event => {

        event.preventDefault();
       // const [cookies, setCookie] = useCookies(['JSESSIONID']);
          console.log(this.state.newpatientList);
//           Axios.post("http://localhost:8080/login",{
//           "body":JSON.stringify({
//             username: this.state.username,
//             password: this.state.password
//           }),
//            "headers":{
//                "Content-Type":"application/json"
//            }
// }).then(resp=>{ console.log(resp);console.log(resp.status)});

let url = "http://localhost:8080";

// Axios.post(url, {}, {
//   auth: {
//     username: this.state.username,
//     password: this.state.password
//   }
// }).then(function(response) {
//   console.log('Authenticated');
//   this.setState({loaded:true});
//   console.log(response);
// }).catch(function(error) {
//   console.log('Error on Authentication');
// });

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function (event) {
    console.log(event);
  // if (this.readyState === 4) {
  //   console.log(this.responseText);
  // }
  // else{
  //   console.log("unauthenticated");
  // }
});

xhr.open("GET", "http://localhost:8080/getAll", false, this.state.username, this.state.password);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.onreadystatechange=function(e)

   {

    if (xhr.readyState==4 && xhr.status==200)

    {

     console.log(e.target.responseText);
    }

   }

console.log(xhr.send());

      }



    render() {
      if(!this.state.loaded)
      {

      

        return (

            <div className="Login">

                <header>

                    <h1>{this.props.name}</h1>

                </header>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlusername="username">

            <FormLabel>Enter username</FormLabel>

            <FormControl

              autoFocus

              type="email"
              name="username"
              onChange={this.handleChange}

            />

          </FormGroup>

          <FormGroup controlusername="password" >

            <FormLabel>Password</FormLabel>
            <FormControl
        
              onChange={this.handleChange}
              name="password"
              type="password"

            />

          </FormGroup>

          <Button

            block

            bsSize="large"

            variant="dark"

            // disabled={!this.valusernameateForm()}

            type="submit"
            onClick={this.handleSubmit}

            >Sign in

          </Button>

        </form>

      </div>

        );
      }
      else{
              if(this.props.name==="Admin Login")   
              {
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Admin</h1>
                <AdminProfile></AdminProfile>
              
                
                </div>);
              }
              else if(this.props.name==="Patient Login")
              {
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Patient</h1>
                <CheckAvailability></CheckAvailability>
                </div>);
              }
              else if(this.state.loaded){
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Donor</h1>
                <DonorHomePage donorusername={this.state.username}></DonorHomePage>
                
                </div>);
              }
      }

    }

}



export default Login;