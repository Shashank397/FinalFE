import React from 'react';

import './DisplayDonorProfile.css';

const DisplayDonorProfile = (props) => {

    return (
        <div className='displaydonorprofile_wrapper'>
            <p>{props.donorProfile.blood_group}</p>
            <p>{props.donorProfile.donor_name}</p>
        </div>
    );

}

export default DisplayDonorProfile;