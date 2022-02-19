import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className='w-100 h-100 bg-gray d-flex flex-column align-items-center justify-content-center '>

            <h1 className=' fw-bold'>Welcome To Our Website </h1>
            <div>
                <Link className='btn btn-secondary' to='/register'> Register
                </Link>
                <Link className='btn btn-secondary ms-2' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Home;