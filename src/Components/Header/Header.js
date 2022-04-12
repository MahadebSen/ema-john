import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Log In</Link>
                <span>/</span>
                <Link to='/signup'>Sign up</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;