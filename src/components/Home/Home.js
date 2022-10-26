import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import HomeBlog from '../HomeBlog/HomeBlog';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        toast.success('Thanks for your Subscription!!!');
        form.reset()
    }

    return (
        <div>
            <div className="bg-gradient-to-b from-green-50 to-green-100">


                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                    Start Your Journey Today
                                    <div className="relative inline-flex">
                                        <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                        <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">ENVIROTECH.</h1>
                                    </div>
                                </h1>

                                <p className="mt-8 text-base text-black sm:text-xl">ENVIROTECH is one of the best online learning platform in the world. Here has 200+ Instructors from different COuntries who teach you in hte best.</p>

                                <div className="mt-10 ">
                                    <Link to='/courses' className="mr-5 inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start Learning </Link>

                                    <Link to='/blog' className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">Learn More</Link>
                                </div>
                            </div>

                            <div>
                                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            {/* courses section */}
            <div className='min-h-screen py-10 bg-gradient-to-tr from-red-300 to-yellow-200'>

                <h2 className='text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight pt-10'>Our Courses</h2>

                <div className="grid md:grid-cols-3 items-center md:w-4/5 gap-5 mx-auto py-20">

                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)

                    }
                </div>
                <div className='mx-auto text-center mb-10'>
                    <Link to='/courses' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                </div>
            </div>



            {/* successful people section */}

            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="" />
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg" alt="" />
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="" />
                        </div>
                    </div>

                    <div className="mt-8 text-center md:mt-16">
                        <Link to='/register' className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </Link>
                    </div>
                </div>
            </section>



            {/* blog section */}


            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>

                        <HomeBlog></HomeBlog>

                    </div>

                    <div className='mx-auto text-center my-10'>
                        <Link to='/blog' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                    </div>
                </div>
            </section>



            {/* newsletter */}

            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get Notification for any Updates</h2>
                        <p className="mt-4 text-base text-gray-200">If you want to get any notifications from us then please subscribe here. We will update you all information</p>

                        <form onSubmit={handleSubmit} method="POST" className="mt-8 lg:mt-12">
                            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                                <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                    <div className="relative text-gray-400 focus-within:text-gray-600">
                                        <label htmlFor="email" className="sr-only"></label>
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email address"
                                            className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                    Get instant access
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;