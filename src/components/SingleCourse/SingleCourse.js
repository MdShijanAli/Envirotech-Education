import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className='grid md:grid-cols-3 md:px-20 py-20 gap-5'>
                <div className="card w-full glass col-span-2">
                    <figure><img className='my-5' src={course?.photo} alt="car!" /></figure>
                    <div className="card-body">

                        <h2 className="card-title">{course?.name}</h2>
                        <p>{course?.description}</p>

                    </div>
                </div>

                <div>
                    <div className="card w-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl">

                        <div className="card-body">
                            <h2 className="text-2xl card-title mb-10">{course?.name}</h2>
                            <p className='text-xl my-1 font-bold'>Author: {course.author}</p>
                            <p className='text-xl my-1'>Course Level: {course.level}</p>
                            <p className='text-xl my-1'>Duration: {course.duration}</p>
                            <p className='text-xl my-1'>Total Enroll: {course.students}</p>
                            <p className='text-xl my-1'>Price: ${course.price}</p>


                            <Link to='/pdf' className="card-actions justify-start mt-10">

                                <button className="btn btn-primary w-full"><ArrowDownTrayIcon className='h-6 w-6 mr-2'></ArrowDownTrayIcon>  Download Outline</button>
                            </Link>

                            <Link to='/checkout' className="card-actions">
                                <button className="btn btn-primary w-full">Get premium access</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCourse;