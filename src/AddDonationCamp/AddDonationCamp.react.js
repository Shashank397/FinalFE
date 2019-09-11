import React from 'react';

import './AddDonationCamp.css';

const AddDonationCamp = () => {

    return (
        <div className='adddonationcamp_wrapper'>
                <h1>Donation Camp Registeration</h1>
         <form className="formdonate">
        <label>
           Organization ID:
         <input type="number" name="OrgID" />
         </label><br></br>
         <label>
            Organization Name:
         <input type="text" name="Name" />
         </label><br></br>
         <label>
            Organizer Name:
         <input type="text" name="Name" />
         </label><br></br>
         <label>
            Associated BloodBank ID:
         <input type="number" name="BloodBankID" />
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
            PinCode:
         <input type="number" name="Pincode" />
         </label><br></br>
         <label>
            Date and Time:
         <input type="datetime-local" name="DateTime" />
         </label>
         <input type="submit" value="Submit" />
        </form>  

        </div>
    );

}

export default AddDonationCamp;