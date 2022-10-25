import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesPage from './CoursesPage/CoursesPage';
import SideBar from './SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid grid-cols-4 px-5  bg-gradient-to-tr from-red-300 to-yellow-200'>
            <div>
                <SideBar></SideBar>
            </div>
            <div className='col-span-3'>
                <div className='min-h-screen '>

                    <h2 className='text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight pt-20'>All Courses</h2>

                    <div className="grid md:grid-cols-3 gap-5 py-20">

                        {
                            courses.map(course => <CoursesPage key={course.id} course={course}></CoursesPage>)



                        }
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Courses;