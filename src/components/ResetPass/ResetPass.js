import { getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import app from '../../firebase/firebase.config';

const ResetPass = () => {

    const auth = getAuth(app);
    const [userEmail, setUserEmail] = useState('');


    const handleSubmit = event => {
        event.preventDefault();

    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('please enter your email address')
            return;
        }

        sendEmailVerification(auth, userEmail)
            .then(() => {
                toast.success('Password Reset EMail sent. Please check your email address')
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <form onSubmit={handleSubmit} className=" my-40 mx-5 card md:w-1/3 md:mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Reset Password!!!</h2>
                <input
                    onBlur={handleEmailBlur}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block mt-5 w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                />
                <div className="card-actions justify-center mt-5">
                    <button onClick={handleForgetPassword} className="btn btn-primary">Reset Password</button>
                </div>
            </div>
        </form>
    );
};

export default ResetPass;