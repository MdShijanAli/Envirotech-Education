import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const Checkout = () => {

    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (



        <div className="bg-indigo-50 ">
            <form onSubmit={handleSubmit} className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">




                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-500">Checkout</p>
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
                        <input defaultValue={user?.email} readOnly name='email' id="email" aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="cardHolder" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Card Holder{" "}
                        </label>
                        <input name='cardHolder' id="cardHolder" aria-labelledby="cardHolder" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Card Holder Name " required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="address" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Billing Address{" "}
                        </label>
                        <input name='address' id="address" aria-labelledby="address" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Newtown-7 no, Dinajpur Sadar, Dinajpur " required />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="cardDetails" className="text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Card Details{" "}
                        </label>
                        <input name='cardDetails' id="cardDetails" aria-labelledby="cardDetails" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="XXXX-XXXX-XXXX-XXXX " required />
                    </div>
                    <div className=" w-full">

                        <input name='mm' id="mm" aria-labelledby="mm" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="MM/YY " required />
                    </div>
                    <div className=" w-full">

                        <input name='cvc' id="cvc" aria-labelledby="cvc" type="number" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="CVC " required />
                    </div>


                    <div className="mt-8">
                        <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Create my account
                        </button>
                    </div>
                </div>

            </form>
        </div>



    );
};

export default Checkout;