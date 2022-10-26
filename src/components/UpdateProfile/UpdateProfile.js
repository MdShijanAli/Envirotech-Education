import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
        console.log(photoURLRef.current.value);

    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

            <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">




                <div className="w-full flex items-center justify-between py-5">
                    <hr className="w-full bg-gray-400" />
                    <p className="text-base w-full font-medium leading-4 px-2.5 text-gray-500">Update Profile</p>
                    <hr className="w-full bg-gray-400" />
                </div>
                <div className="mt-6 w-full">
                    <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                        {" "}
                        Name{" "}
                    </label>
                    <input onChange={handleNameChange} defaultValue={name} name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Md Shijan Ali " />
                </div>

                <div className="mt-6 w-full">
                    <label htmlFor="photoURL" className="text-sm font-medium leading-none text-gray-800">
                        {" "}
                        Photo URL{" "}
                    </label>
                    <input ref={photoURLRef} defaultValue={user?.photoURL} name='photoURL' id="photoURL" aria-labelledby="photoURL" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="jpg,jpeg,png etc " />
                </div>
                <div className="mt-6 w-full">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                        {" "}
                        Email{" "}
                    </label>
                    <input defaultValue={user?.email} readOnly name='email' id="email" aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
                </div>
                <div className="mt-6 w-full">
                    <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">
                        {" "}
                        Password{" "}
                    </label>
                    <input readOnly name='password' id="password" aria-labelledby="password" type="password" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Password " />
                </div>





                <button role="button" className="mt-8 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                    Update
                </button>

            </div>

        </form>
    );
};

export default UpdateProfile;