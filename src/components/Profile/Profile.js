import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (


        <div className="bg-gradient-to-tr from-red-300 to-yellow-200 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
            <div className="relative h-40">
                <img className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            </div>
            <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img className="object-cover w-full h-full" src={user?.photoURL} />
            </div>
            <div className="mt-16">
                <h1 className="text-lg text-center font-semibold">
                    {user?.displayName}
                </h1>
                <p className="text-sm text-gray-600 text-center">
                    {user?.email}
                </p>
            </div>

            <div className='text-center my-10'>
                <Link to='/update-profile' className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">Update Profile</Link>

            </div>
        </div>
    );
};

export default Profile;