import { ChatBubbleLeftIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            {
                blogs.map(blog => <div className="card md:grid md:grid-cols-3 bg-base-100 shadow-xl border-gray-800 border-2 my-5 mx-5  md:mx-32">
                    <figure><img className='h-full  md:w-full' src={blog?.photo} alt="Album" /></figure>
                    <div className="card-body col-span-2">
                        <h2 className="card-title">{blog?.name}</h2>
                        <p>{blog?.description}</p>

                        <h2 className='text-xl font-semibold'>Author: {blog?.author}</h2>

                        <div className='flex justify-between mt-5'>
                            <div className='flex items-center'>
                                <HeartIcon className='w-8 h-8 mr-2 text-red-700'></HeartIcon>
                                {blog?.like} Likes
                            </div>
                            <div className='flex items-center'>
                                <ChatBubbleLeftIcon className='w-8 h-8 mr-2 text-slate-900'></ChatBubbleLeftIcon>
                                {blog?.comment} Comments
                            </div>
                            <div className='flex items-center'>
                                <EyeIcon className='w-8 h-8 mr-2 '></EyeIcon>
                                {blog?.view} Views
                            </div>
                        </div>

                    </div>
                </div>)
            }

        </div>
    );
};

export default Blog;