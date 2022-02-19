import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {

    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        let userName = localStorage.getItem('Name').replace(/"/g, "");
        let password = localStorage.getItem('Password').replace(/"/g, "");

        if ((data.name === userName) || (data.password === password)) {
            history.push('/main')

        }
        else {
            console.log(errors);
            alert('Invalid Credentials')
        }
    }
    return (
        <div>
            <div style={{ height: '100vh', width: '100vw' }} className='bg-dark text-light d-flex flex-column align-items-center justify-content-center'>
                <h1 className='my-2'>Login Here </h1>
                <form className='bg-light text-dark d-flex flex-column align-items-center justify-content-center w-50 h-75' onSubmit={handleSubmit(onSubmit)}>
                    <input className='p-2 w-50 rounded' placeholder='Name' type='text' {...register("name")} /> <br />
                    <input className='p-2 w-50 rounded' placeholder='Password' type='password' {...register("password")} /> <br />

                    <input className='w-25 fw-bold bg-gray border-0 my-3 py-2' type="submit" value='Login' />
                </form>
                <p>New Here?

                    <Link to='/register'>
                        Please Registrer
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;