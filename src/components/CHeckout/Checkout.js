import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const Checkout = ({ course }) => {

    const navigate = useNavigate();

    console.log('course', course);
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/thank-you')




    }

    return (



        <div className="bg-indigo-50  md:px-20 py-20 gap-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded">

            <form onSubmit={handleSubmit} className=" md:px-10  px-4  2xl:mx-auto 2xl:container md:flex items-center justify-center">

                <div className=" md:w-2/3 px-10 py-10">




                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-xl font-medium leading-4 px-2.5 text-black">Checkout</p>
                        <hr className="w-full bg-gray-400" />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Name{" "}
                        </label>
                        <input defaultValue={user?.displayName} name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Md Shijan Ali " required />
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Email{" "}
                        </label>
                        <input defaultValue={user?.email} name='email' id="email" aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="cardHolder" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Card Holder{" "}
                        </label>
                        <input name='cardHolder' id="cardHolder" aria-labelledby="cardHolder" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Card Holder Name " required />
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="cardDetails" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Card Details{" "}
                        </label>
                        <input name='cardDetails' id="cardDetails" aria-labelledby="cardDetails" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="XXXX-XXXX-XXXX-XXXX " required />
                    </div>
                    <div className='flex gap-5'>
                        <div className="w-1/2">

                            <input name='mm' id="mm" aria-labelledby="mm" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="MM/YY " required />
                        </div>
                        <div className=" w-1/2 ">

                            <input name='cvc' id="cvc" aria-labelledby="cvc" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="CVC " required />
                        </div>
                    </div>

                    <div className="mt-6 w-full">
                        <label htmlFor="address" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Billing Address{" "}
                        </label>
                        <input name='address' id="address" aria-labelledby="address" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Newtown-7 no, Dinajpur Sadar, Dinajpur " required />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className="mt-6 w-1/2">
                            <label htmlFor="state" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                State{" "}
                            </label>
                            <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" required>
                                <option value="State">State</option>
                                <option value="State">Dhaka</option>
                                <option value="State">Chitaging</option>
                                <option value="State">Rajsahi</option>
                                <option value="State">Sylhet</option>
                                <option value="State">Khulna</option>
                                <option value="State">Rangpur</option>
                                <option value="State">Mymansingh</option>
                                <option value="State">Barishal</option>
                                <option value="State">Noakhali</option>
                            </select>
                        </div>

                        <div className="mt-6 w-1/2">
                            <label htmlFor="zip" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Zip Code{" "}
                            </label>
                            <input name='zip' id="zip" aria-labelledby="zip" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder=" 5200 " required />
                        </div>
                    </div>


                    <button role="button" className="mt-8 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                        Order Now
                    </button>

                </div>

            </form>



        </div>



    );
};

export default Checkout;