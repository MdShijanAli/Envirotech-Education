import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            {
                blogs.map(blog => <div className="card md:grid grid-cols-3 bg-base-100 shadow-xl border-gray-800 border-2 my-5  md:mx-32">
                    <figure><img className='h-full  md:w-full' src={blog?.photo} alt="Album" /></figure>
                    <div className="card-body col-span-2">
                        <h2 className="card-title">{blog?.name}</h2>
                        <p>{blog?.description}</p>

                    </div>
                </div>)
            }

        </div>
    );
};

export default Blog;