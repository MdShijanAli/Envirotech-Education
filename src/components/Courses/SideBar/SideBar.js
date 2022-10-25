import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ courses }) => {
    return (
        <div className='md:mt-20 rounded-xl bg-white p-5 mx-10 sticky top-28'>
            <h1 className='text-3xl font-semibold mb-10 text-indigo-900'>Total {courses.length} Courses</h1>

            {
                courses.map(course => <Link to={`/courses/${course.id}`} ><p className='text-xl font-semibold hover:text-indigo-900 my-2'>{course.name}</p></Link>)
            }
        </div>
    );
};

export default SideBar;