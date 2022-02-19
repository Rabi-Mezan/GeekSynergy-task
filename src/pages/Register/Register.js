import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        localStorage.setItem("Name", JSON.stringify(data.name));
        localStorage.setItem("Password", JSON.stringify(data.password));
        console.log("Saved in Local Storage");
    }


    return (
        <div style={{ height: '100vh', width: '100vw' }} className='bg-dark text-light d-flex flex-column align-items-center justify-content-center'>
            <h1 className='my-2'>Register Here </h1>
            <form className='bg-light text-dark d-flex flex-column align-items-center justify-content-center w-50 h-75' onSubmit={handleSubmit(onSubmit)}>
                <input required className='p-2 w-50 rounded' placeholder='Name' type='text' {...register("name")} /> <br />
                <input required className='p-2 w-50 rounded' placeholder='Email' type='email' {...register("email")} /> <br />
                <input required className='p-2 w-50 rounded' placeholder='Password' type='password' {...register("password")} /> <br />
                <input required className='p-2 w-50 rounded' placeholder='Phone Number' type='number' {...register("number")} /> <br />
                <select required placeholder='Profession' className=' p-2 w-50 rounded' {...register("profession")}>
                    <option value="female">Doctor</option>
                    <option value="male">Bussiness</option>
                    <option value="other">Engineer</option>
                    <option value="other">Self Employed</option>
                    <option value="other">Others</option>
                </select>
                <input className='w-25 fw-bold bg-gray border-0 my-3 py-2' type="submit" value='Register' />
            </form>
            <p>Already Registered ?

                <Link to='/login'>
                    Login Here
                </Link>
            </p>
        </div>
    );
};

export default Register;