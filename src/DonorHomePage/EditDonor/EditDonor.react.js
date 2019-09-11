import React from 'react';

import './EditDonor.css';

class EditDonor extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response:[],
            loaded:false,
            active:false
        }
    }
    componentDidMount(){
        console.log("Fetch Donation Camps Component Mounted");
        // specify url of the json data
        let url="http://localhost:5600/donor";
        console.log(url+" loaded: "+ this.state.loaded);
        // fetch the json from the url
        fetch(url).then(resp=>resp.json()).then(
            response=>{this.setState({
                response:response,loaded:true
            });
            console.log(this.state.response);
            console.log(" loaded: "+ this.state.loaded);
            }
        );
    }

    handleDeactivate=()=>{
        
        
        var response=this.state.response;
        response.donor_availability=false;
        this.setState({response:response});
        
        
        // let url="http://localhost:5600/donor";
        // fetch(url,{
        //     "method":"POST","body":JSON.stringify(this.state.newDonor),
        //     "headers":{"Content-Type":"application/json"}
        // }).then(
        //     resp=>{console.log("Update",resp.status, this.state.response)}
        // );
        // this.setState({active:false});

    }
    handleActivate=()=>{
        var response=this.state.response;
        response.donor_availability=true;
        this.setState({response:response});
        // this.state.response.donor_availability=true;
        // this.setState(this.state);
        // let url="http://localhost:5600/donor";
        // fetch(url,{
        //     "method":"POST","body":JSON.stringify(this.state.response),
        //     "headers":{"Content-Type":"application/json"}
        // }).then(
        //     resp=>{console.log("Update",resp.status, this.state.response)}
        // );
        // this.setState({active:true});

    }
    

    render() {
        if(this.state.loaded){
            if(this.state.response.donor_availability){
                return (
                    <div className='editdonor_wrapper'>
                        <div className="jumbotron text-center">
                        <h1>{this.state.response.donor_name}</h1>
                        <p>{this.state.response.dob}</p>
                        <p>{this.state.response.blood_group}</p>
                        <p>{this.state.response.address.city}</p>
                        
                        </div>
                        <button onClick={this.handleDeactivate}>Deactivate</button>
                    </div>
                );
            }
            else{
                return (
                    <div className='editdonor_wrapper'>
                        <div className="jumbotron text-center">
                        <h1>{this.state.response.donor_name}</h1>
                        <p>{this.state.response.dob}</p>
                        <p>{this.state.response.blood_group}</p>
                        <p>{this.state.response.address.city}</p>
                        
                        </div>
                        <button onClick={this.handleActivate}>Activate</button>
                    </div>
                );
            }
        }
        else{
            return (
                <div className='editdonor_wrapper'>
                    <p>Please Wait..</p>
                </div>
            );
        }
    }
}

export default EditDonor;