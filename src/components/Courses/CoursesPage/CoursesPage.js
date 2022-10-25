import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoursesPage = ({ course }) => {
    return (
        <div>
            <div className="">
                <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 className="mb-3 text-xl font-bold text-indigo-600">{course?.level}</h3>
                    <div className="relative">
                        <img className="w-full h-48 rounded-xl" src={course?.photo} alt="Colors" />
                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${course?.price}</p>
                    </div>

                    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{course?.name}</h1>
                    <div className="my-4">
                        <p>{course?.description.slice(0, 100)}</p>

                        <div className='flex justify-between items-center mt-3'>
                            <h5 className='text-xl font-semibold'>( {course?.students}) Students</h5>
                            <div className='flex'>
                                <FaStar className='h-5 w-5 text-amber-500'></FaStar>
                                <FaStar className='h-5 w-5 text-amber-500'></FaStar>
                                <FaStar className='h-5 w-5 text-amber-500'></FaStar>
                                <FaStar className='h-5 w-5 text-amber-500'></FaStar>
                                <FaStar className='h-5 w-5 text-amber-500'></FaStar>
                            </div>
                        </div>
                        <Link to={`/courses/${course.id}`}><button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoursesPage;