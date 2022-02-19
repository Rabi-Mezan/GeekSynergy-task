import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {

    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        let userName = localStorage.getItem('Name').replace(/"/g, "");
        let password = localStorage.getItem('Password').replace(/"/g, "");

        if ((data.name === userName) || (data.password === password)) {
            history.push('/main')
            reset()

        }
        else {
            console.log(errors);
            swal("Invalid User or ", "Invalid Credentials!", "error")
            reset()
        }
    }
    return (
        <div>
            <div style={{ height: '100vh', width: '100vw' }} className='bg-dark text-light d-flex flex-column align-items-center justify-content-center'>
                <h1 className='my-2 fs-2'>LOGIN HERE </h1>

                <form className=' text-dark d-flex flex-column align-items-center justify-content-center w-50 h-50' onSubmit={handleSubmit(onSubmit)}>
                    <input className='p-2 w-50 rounded' placeholder='Name' type='text' {...register("name")} /> <br />
                    <input className='p-2 w-50 rounded' placeholder='Password' type='password' {...register("password")} /> <br />

                    <input className='w-25 btn btn-primary fw-bold bg-gray border-0 my-3 py-2' type="submit" value='Login' />
                </form>
                <p>New Here?

                    <span className='ms-2'>
                        <Link to='/register'>
                            Please Registrer
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;