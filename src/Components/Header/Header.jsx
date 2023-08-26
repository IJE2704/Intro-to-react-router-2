import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='no-underline flex text-xm md:text-2xl font-bold bg-blue-400 mx-auto sm:gap-16 md:gap-24   py-5 pl-4'>
            <Link className='no-underline mr-4' to="/">Home</Link>
            <Link className='no-underline mr-4' to="/about">about</Link>
            <Link className='no-underline mr-4' to="/contact">Contact</Link>
            <Link className='no-underline mr-4' to= "/friends">Friends</Link>
        </nav>
    );
};

export default Header;