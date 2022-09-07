import React, { useState } from 'react';
import Login from '../Login/Login';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate]=useState(new Date())
    const handleChange= date =>{
        console.log(date);
        setSelectedDate(date);
    }
    return (
       <div>
        <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
        <BookAppointment date={selectedDate}></BookAppointment>
       </div>
    );
};

export default Appointment;