import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';

const Header = () => {
    return (
        <header className="p-4 my-10 bg-gray-100 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <div className='flex '>
                    <img src={logo} alt="" />
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 mx-5 text-pink-400 text-xl">Home</Link>
                            <Link to='/blog' className="flex items-center px-4 text-pink-400 text-xl">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to='/signin'><button className="btn btn-outline btn-secondary">Sign in</button></Link>
                    <Link to='/signup'><button className="btn btn-outline btn-secondary mx-5">Sign up</button></Link>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;