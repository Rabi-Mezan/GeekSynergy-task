import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ height: '80px' }} className='bg-dark d-flex align-items-center justify-content-end  border-0 rounded  '>
            <div>
                <Link to='/home'>
                    <button className='btn btn-secondary  px-3 py-2 me-3'>Home</button>
                </Link>
                <Link to='/info'>
                    <button className='btn btn-secondary  px-3 py-2 me-5'>Company Info</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;