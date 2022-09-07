import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', info.email)
        formData.append('name', info.name)
        

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className=' row'>
            <div className='col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-9'>
                <div>
                    <h3>
                        Add a doctor:
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" id="exampleInputEmail1" name='email' placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" id="exampleInputPassword1" placeholder="Name" />
                    </div>
                    <div class="form-check">
                    <label for="exampleInputPassword1">Upload an image</label>
                        <input onBlur={handleChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="image" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </section>
    );
};

export default AddDoctor;