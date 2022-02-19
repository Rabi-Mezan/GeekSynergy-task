import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';


const Home = () => {
    return (
        <div>
            <h1 className='text-light fw-bold'>Welcome To Our Website </h1>
            <Link className='' to='/register'> Register
            </Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Home;