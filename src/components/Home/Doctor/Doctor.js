import React, { useEffect, useState } from 'react';
import './Doctor.css';
import '../MakeAppointment/Shared.css';
import caudy from '../../../images/5790-removebg.png';
import DoctorDetails from '../DoctorDetails/DoctorDetails';


const Doctor = () => {
    const [dInformation,setDInformation]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setDInformation(data);
        })
    },[])

    const doctorsData=[
        {
           img:caudy,
          name:'Caudy',
          phone:'0171*******'
        },
        {
             img:caudy,
            name:'Smith',
            phone:'0171*******'
          },
          {
            img:caudy,
            name:'Abraham',
            phone:'0171*******'
          }
    ]

    return (
       <div className='d-flex justify-content-center dc-container' id='service'>
           <div>
           <div className='d-flex justify-content-center mt-5'>
            <h6 className='text-green'>Our doctors</h6>
        </div>
        <div className='row  '>
            {
                doctorsData.map(data=><DoctorDetails data={data}></DoctorDetails>)
            }
{/*         
            {
              dInformation.map(info=><DoctorDetails info={info}></DoctorDetails>)

            } */}
        </div>
           </div>
        </div>
    );
       
};

export default Doctor;