import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleSignOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <header className="p-4 my-10 bg-gray-100 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <div className='flex '>
                    <img src={logo} alt="" />
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            {
                                user?.email ?
                                    <>
                                        <Link to='/' className="flex items-center px-4 mx-5 text-pink-400 text-xl">Home</Link>
                                        <Link to='/blog' className="flex items-center px-4 mx-5 text-pink-400 text-xl">Blog</Link>
                                        <Link to='/' className="flex items-center px-4 mx-5 text-pink-400 text-xl">My reviews</Link>
                                        <Link to='/' className="flex items-center px-4 text-pink-400 text-xl">Add Service</Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/' className="flex items-center px-4 mx-5 text-pink-400 text-xl">Home</Link>
                                        <Link to='/blog' className="flex items-center px-4 mx-5 text-pink-400 text-xl">Blog</Link>

                                    </>
                            }

                        </li>
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className="btn btn-sm">Sign out</button>
                            :
                            <>
                                <Link to='/signin'><button className="btn btn-sm">Sign in</button></Link>
                                <Link to='/signup'><button className="btn btn-sm mx-5">Sign up</button></Link>
                            </>
                    }


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