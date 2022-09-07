import React, { useEffect, useState } from 'react';
import './DoctorDetails.css';

const DoctorDetails = ({data}) => {
    //  console.log(info.img);
    
    return (
        <div className='col-md-4 container d-flex justify-content-center p-3'>
            <div >
            <img src={`http://localhost:5000/western.jpg`} alt='' className='doctor-img img-fluid'></img>
            
            <div className='d-flex justify-content-center'>
                <div>
                <h6>{data.name}</h6>
                <p>{data.phone}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DoctorDetails;