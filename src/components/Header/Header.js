import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import { UserIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="w-full bg-purple-400 shadow sticky top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <img className='h-14' src={logo} alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to='/contact'>Contact</Link>
                            </li>

                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">

                            {user?.uid && <div className='flex items-center'>
                                <UserIcon className='w-6 h-6 text-white'></UserIcon>
                                <p className='text-white my-5'>{user?.displayName}</p>
                            </div>}

                            {
                                user?.uid ? <Link onClick={logout}
                                    to='/'
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Sign Out
                                </Link> :
                                    <>
                                        <Link
                                            to='/login'
                                            className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/register'
                                            className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                        >
                                            Register
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex">


                    {user?.uid && <div className='flex items-center mr-5'>
                        <img className='w-10 h-10 rounded-full mr-2' src={user?.photoURL} alt="" />
                        <p className='text-white'>{user?.displayName}</p>
                    </div>}


                    {
                        user?.uid ? <Link onClick={logout}
                            to='/'
                            className="px-4  py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Logout
                        </Link> :
                            <>
                                <Link
                                    to='/login'
                                    className="px-4 mr-2 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/register'
                                    className="px-4 mr-2 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Register
                                </Link>
                            </>

                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;