import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
import logo from '../../images/logo.png'


const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course);


    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(`${course?.photo}`, 'PNG', 165, 20, 300, 200);
        // doc.addImage(`${course?.photo}`, 'PNG', 250, 20, 100, 50);
        // doc.addPage()

        doc.setFont('Helvertica', 'bold')
        doc.text(170, 270, 'Course Name')
        doc.text(170, 290, 'Course Level')
        doc.text(170, 310, 'Course Duration')
        doc.text(170, 330, 'Enrolled')
        doc.text(170, 350, 'Course Author')
        doc.text(170, 370, 'Course Price')
        doc.text(170, 420, `( Thank you for Purches ${course.name} course. )`)

        doc.setFont('Helvertica', 'normal')
        doc.text(350, 270, `: ${course?.name}`)
        doc.text(350, 290, `: ${course?.level}`)
        doc.text(350, 310, `: ${course.duration}`)
        doc.text(350, 330, `: ${course.students}`)
        doc.text(350, 350, `: ${course.author}`)
        doc.text(350, 370, `: $${course.price}`)


        doc.save(`${course?.name}.pdf`)
    }
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className='md:grid md:grid-cols-3 md:px-20 mx-5 py-20 gap-5 '>
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


                            <Link onClick={pdfGenerate} className="card-actions justify-start mt-10">

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