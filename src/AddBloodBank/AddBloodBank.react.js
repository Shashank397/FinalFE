import React from 'react';


import './AddBloodBank.css';

const AddBloodBank = () => {

    return (
        <div className='addbloodbank_wrapper'>
            <h1>Blood Bank Registeration</h1>
         <form className="form1">
        <label>
            ID:
         <input type="number" name="ID" />
         </label><br></br>
         <label>
            Name:
         <input type="text" name="Name" />
         </label><br></br>
         <label>
            Phone Number:
         <input type="number" name="PhoneNumber" />
         </label><br></br>
         <label>
            Email:
         <input type="email" name="Email" />
         </label><br></br>
         <label>
            Local Address:
         <input type="text" name="Address" />
         </label><br></br>
         <label>
            City:
         <input type="text" name="City" />
         </label><br></br>
         <label>
            State:
         <input type="text" name="State" />
         </label><br></br>
         <label>
            Country:
         <input type="text" name="Country" />
         </label><br></br>
         <label>
            ONeg Availability:
         <input type="number" name="ONeg" />
         </label><br></br>
         <label>
            OPoz Availability:
         <input type="number" name="OPoz" />
         </label><br></br>
         <label>
            ANeg Availability:
         <input type="number" name="ANeg" />
         </label><br></br>
         <label>
            APoz Availability:
         <input type="number" name="OPoz" />
         </label><br></br>
         <label>
            BPoz Availability:
         <input type="number" name="OPoz" />
         </label><br></br>
         <label>
            BNeg Availability:
         <input type="number" name="BNeg" />
         </label><br></br>
         <label>
            ABNeg Availability:
         <input type="number" name="ABNeg" />
         </label><br></br>
         <label>
            ABPoz Availability:
         <input type="number" name="ABPoz" />
         </label><br></br>
         <label></label>
         <input type="submit" value="Submit" />
        </form>  
        </div>
    );

}

export default AddBloodBank;