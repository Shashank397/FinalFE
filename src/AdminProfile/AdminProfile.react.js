import React from 'react';
import AddBloodBank from '../AddBloodBank/AddBloodBank.react';
import AddDonationCamp from '../AddDonationCamp/AddDonationCamp.react'
import './AdminProfile.css';

const AdminProfile = () => {

    return (
        <div className='adminprofile_wrapper'>
            <AddBloodBank>
            </AddBloodBank>
            <AddDonationCamp></AddDonationCamp>

        </div>
    );

}

export default AdminProfile;